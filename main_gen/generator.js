"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var protobuf = require("protobufjs");
var fs = require("fs");
var path = require("path");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        function findAll(item) {
            if (item instanceof protobuf.Type) {
                messages.push(item);
            }
            if (item instanceof protobuf.Namespace && item.nested) {
                Object.values(item.nested).forEach(function (nestedItem) {
                    findAll(nestedItem);
                });
            }
        }
        var protoPath, root, messages, protoDir, protoBaseName, importPath, GenCode, typeMap, getTsType;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    protoPath = process.argv[2];
                    if (!protoPath) {
                        console.error("Please provide a proto file path");
                        process.exit(1);
                    }
                    return [4 /*yield*/, protobuf.load(protoPath)];
                case 1:
                    root = _a.sent();
                    console.log("Loaded proto: ".concat(protoPath));
                    messages = [];
                    protoDir = path.dirname(protoPath);
                    protoBaseName = path.basename(protoPath, '.proto');
                    importPath = protoDir === '.' ? "./".concat(protoBaseName) : "./".concat(path.basename(protoDir), "/").concat(protoBaseName);
                    GenCode = "import * as Gen from \"".concat(importPath, "\";\n\n");
                    findAll(root);
                    typeMap = {
                        'string': 'string',
                        'double': 'number',
                        'float': 'number',
                        'int32': 'number',
                        'int64': 'number',
                        'uint32': 'number',
                        'uint64': 'number',
                        'sint32': 'number',
                        'sint64': 'number',
                        'fixed32': 'number',
                        'fixed64': 'number',
                        'sfixed32': 'number',
                        'sfixed64': 'number',
                        'bool': 'boolean',
                        'bytes': 'Uint8Array',
                    };
                    getTsType = function (field) {
                        var _a;
                        var baseType = field.resolvedType ? "Gen.".concat(field.resolvedType.name) : (_a = typeMap[field.type]) !== null && _a !== void 0 ? _a : 'any';
                        return field.repeated ? "".concat(baseType, "[]") : baseType;
                    };
                    messages.forEach(function (message) {
                        GenCode += "export class ".concat(message.name, "Builder{\n");
                        GenCode += "    private ".concat(message.name.toLowerCase(), ": Partial<Gen.").concat(message.name, ">={};\n\n");
                        message.fieldsArray.forEach(function (field) {
                            GenCode += "    set".concat(field.name.charAt(0).toUpperCase() + field.name.slice(1), "(").concat(field.name, ":").concat(getTsType(field), "):this{\n");
                            GenCode += "        this.".concat(message.name.toLowerCase(), ".").concat(field.name, "=").concat(field.name, ";\n");
                            if (field.partOf) {
                                field.partOf.fieldsArray.forEach(function (oneofField) {
                                    if (oneofField.name !== field.name) {
                                        GenCode += "        this.".concat(message.name.toLowerCase(), ".").concat(oneofField.name, "=undefined;\n");
                                    }
                                });
                            }
                            GenCode += "        return this;\n";
                            GenCode += "    }\n\n";
                        });
                        GenCode += "    build(): Gen.".concat(message.name, " {\n");
                        GenCode += "        return Gen.".concat(message.name, ".fromPartial(this.").concat(message.name.toLowerCase(), ");\n");
                        GenCode += "    }\n";
                        GenCode += "}\n\n";
                    });
                    fs.writeFileSync('generated-builders.ts', GenCode);
                    console.log('Builder classes generated in generated-builders.ts!');
                    return [2 /*return*/];
            }
        });
    });
}
main().catch(console.error);
