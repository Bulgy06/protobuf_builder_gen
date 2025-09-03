import * as protobuf from "protobufjs";
import * as fs from "fs";
import * as path from "path";

async function main() {
  const protoPath = process.argv[2];
  if (!protoPath) {
    console.error("Please provide a proto file path");
    process.exit(1);
  }

  const root = await protobuf.load(protoPath);
  console.log(`Loaded proto: ${protoPath}`);

  const messages : protobuf.Type[] = [];

  const protoDir = path.dirname(protoPath);
  const protoBaseName = path.basename(protoPath, '.proto');
  const importPath = protoDir === '.' ? `./${protoBaseName}` : `./${path.basename(protoDir)}/${protoBaseName}`;
  
  let GenCode = `import * as Gen from "${importPath}";\n\n`;

  function findAll( item: protobuf.ReflectionObject ) {
    if (item instanceof protobuf.Type){
        messages.push(item);
    }
    if (item instanceof protobuf.Namespace && item.nested){
        Object.values(item.nested).forEach(nestedItem => {
            findAll(nestedItem);
        });
    }
  }
  findAll(root);

  const typeMap : { [key:string] : string } = {
    'string' : 'string',
    'double' : 'number',
    'float' : 'number',
    'int32' : 'number',
    'int64' : 'number',
    'uint32' : 'number',
    'uint64' : 'number',
    'sint32' : 'number',
    'sint64' : 'number',
    'fixed32' : 'number',
    'fixed64' : 'number',
    'sfixed32' : 'number',
    'sfixed64' : 'number',
    'bool' : 'boolean',
    'bytes' : 'Uint8Array',
  };

  const getTsType = (field : protobuf.Field) : string =>{
    const baseType = field.resolvedType ? `Gen.${field.resolvedType.name}` : typeMap[field.type] ?? 'any';
    return field.repeated ? `${baseType}[]` : baseType;
  };

  messages.forEach(message => {
    GenCode+= `export class ${message.name}Builder{\n`;
    GenCode+= `    private ${message.name.toLowerCase()}: Partial<Gen.${message.name}>={};\n\n`;
    message.fieldsArray.forEach(field =>{
        GenCode+= `    set${field.name.charAt(0).toUpperCase()+field.name.slice(1)}(${field.name}:${getTsType(field)}):this{\n`;
        GenCode+= `        this.${message.name.toLowerCase()}.${field.name}=${field.name};\n`;
        
        if(field.partOf){
            field.partOf.fieldsArray.forEach(oneofField=>{
                if(oneofField.name!==field.name){
                    GenCode+= `        this.${message.name.toLowerCase()}.${oneofField.name}=undefined;\n`;
                }
            });
        }
        
        GenCode+= `        return this;\n`;
        GenCode+= `    }\n\n`;
    });
    
    GenCode+= `    build(): Gen.${message.name} {\n`;
    GenCode+= `        return Gen.${message.name}.fromPartial(this.${message.name.toLowerCase()});\n`;
    GenCode += `    }\n`;
    GenCode += `}\n\n`;
    

  })
  fs.writeFileSync('generated-builders.ts', GenCode);
  console.log('Builder classes generated in generated-builders.ts!');
}

main().catch(console.error);
