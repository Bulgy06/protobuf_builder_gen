import * as fs from "fs";
import { Project, Scope } from "ts-morph";
import * as path from "path";

//Intermediate representation for a proto field
interface IRField {
  name: string;
  type: string;
  isRepeated: boolean;
}
//Intermediate representation for a proto message
interface IRMessage {
  name: string;
  fields: IRField[];
  packageName: string;
}

//Map proto types to TypeScript types
const typeMap : { [key:string] : string } = {
  'string' : 'string','double' : 'number',
  'float' : 'number','int32' : 'number',
  'int64' : 'number','uint32' : 'number',
  'uint64' : 'number','sint32' : 'number',
  'sint64' : 'number','fixed32' : 'number',
  'fixed64' : 'number','sfixed32' : 'number',
  'sfixed64' : 'number','bool' : 'boolean',
  'bytes' : 'Uint8Array',
};

//Parsing a descriptor JSON and extracting all messages and their fields
function parseDesc(descriptor: any, packageName: string): IRMessage[] {
  const messages: IRMessage[] = [];
  function walkDesc(nested: any) {
    for (const [name, def] of Object.entries<any>(nested)) {
      if (def.fields) {
        const fields: IRField[] = Object.entries<any>(def.fields).map(
          ([fName, fDef]) => ({
            name: fName,
            type: fDef.type,
            isRepeated: fDef.rule === "repeated",
          })
        );
        messages.push({ name, fields, packageName });
      }
      if (def.nested) walkDesc(def.nested);
    }
  }
  if (packageName && descriptor.nested[packageName].nested) {
    walkDesc(descriptor.nested[packageName].nested);
  }
  return messages;
}


async function main() {
  //Multiple descriptor files as arguments
  const descriptorPaths = process.argv.slice(2);
  if (descriptorPaths.length === 0) {
    console.error("Usage is the following: npx ts-node <script_name>.ts <descriptor1.json> [descriptor2.json ...]");
    process.exit(1);
  }

  //Prep a TypeScript project and output file
  const project = new Project();
  const sourceFile = project.createSourceFile("generated-builders.ts", "", { overwrite: true });

  //Track all messages and import info from all descriptors
  const allMessages: IRMessage[] = [];
  const importAliases: string[] = [];

  //For each descriptor, parse and add import
  for (let i = 0; i < descriptorPaths.length; i++) {
    const descriptorPath = descriptorPaths[i];
    const descriptor = JSON.parse(fs.readFileSync(descriptorPath, "utf-8"));
    const packageName = Object.keys(descriptor.nested ?? {})[0];
    if (!packageName) {
      console.error(`Error: Could not find a package name in ${descriptorPath}`);
      process.exit(1);
    }
    //Use a unique alias for each import
    const importAlias = `Gen${i+1}`;
    importAliases.push(importAlias);
    const importName = path.basename(descriptorPath, '.json');
    const importPath = `./${importName}`;
    sourceFile.addImportDeclaration({
      moduleSpecifier: importPath,
      namespaceImport: importAlias,
    });
    //Parse messages and track their package and alias
    const messages = parseDesc(descriptor, packageName).map(m => ({ ...m, packageName }));
    // Attach alias for later reference
    (messages as any).importAlias = importAlias;
    for (const msg of messages) {
      (msg as any).importAlias = importAlias;
      allMessages.push(msg);
    }
  }

  //Generate builder classes for all messages
  for (const msg of allMessages) {
    
    const builderClass = sourceFile.addClass({
      name: `${msg.name}Builder`,
      isExported: true,
    });

    const instanceName = msg.name.toLowerCase();
    const fullTypeName = `${(msg as any).importAlias}.${msg.packageName}.${msg.name}`;

    builderClass.addProperty({
      name: instanceName,
      scope: Scope.Private,
      type: `Partial<${fullTypeName}>`,
      initializer: "{}",
    });

    //Add setter methods for each field
    for (const field of msg.fields) {
      let tsType = typeMap[field.type];
      if (!tsType) {
        //Reference custom types with correct import alias and package
        tsType = `${(msg as any).importAlias}.${msg.packageName}.${field.type}`;
      }
      if (field.isRepeated) {
        tsType = `${tsType}[]`;
      }
      const setterMethod = builderClass.addMethod({
        name: `set${field.name[0].toUpperCase()}${field.name.slice(1)}`,
        returnType: "this",
      });
      setterMethod.addParameter({
        name: field.name,
        type: tsType,
      });
      setterMethod.setBodyText(
        `// Set the value for ${field.name}\nthis.${instanceName}.${field.name} = ${field.name};\nreturn this;`
      );
    }

    //Add build method
    builderClass.addMethod({
      name: "build",
      returnType: fullTypeName,
    }).setBodyText(
      `// Build the message from the current state\nreturn ${fullTypeName}.fromObject(this.${instanceName});`
    );
  }

  //Save the generated TypeScript file
  await sourceFile.save();
  console.log("Generated: generated-builders.ts");
}

main().catch(console.error);