const fs = require('fs');
const xsdlibrary = require('xsdlibrary');
const path = require('path');
const { xml2xsd, xsd2jsonSchema, json2xsd, validateXml, detectXmlSchema, jsonSchema2xsd } = xsdlibrary;

const basePath = path.join(__dirname, './');
const documentXSD = fs.readFileSync(basePath + 'xsd/document.xsd', 'utf8');
// const jgexml = require('jgexml');
// const result = jgexml.parse(documentXSD, function(state, token) {
//   console.log(token);
// });
// console.log('result', result);
// ocumentXSD', documentXSD.toString());
// console.log('xsd2jsonSchema', validateXml(documentXSD.toString()));
// console.log('documentXSD', documentXSD);
/*const XML_SCHEMA = `
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema  xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:simpleType name="C">
        <xs:restriction base="xs:string">
            <xs:minLength value="1"/>
        </xs:restriction>
    </xs:simpleType>
    <xs:simpleType name="Char_20">
        <xs:restriction base="C">
            <xs:minLength value="1"/>
            <xs:maxLength value="20"/>
        </xs:restriction>
    </xs:simpleType>
</xs:schema>
`;

const Xsd2JsonSchema = require('xsd2jsonschema').Xsd2JsonSchema;
const xs2js = new Xsd2JsonSchema();

const convertedSchemas = xs2js.processAllSchemas({
  schemas: { 'hello_world.xsd': XML_SCHEMA },
});
console.log(convertedSchemas);
const jsonSchema = convertedSchemas['hello_world.xsd'].getJsonSchema();*/
