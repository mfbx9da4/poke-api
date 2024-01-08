import * as fs from "fs";
import * as yaml from "js-yaml";

type SchemaGraph = Map<string, Set<string>>;

function buildSchemaGraph(openApiSpec: any): SchemaGraph {
  const schemaGraph: SchemaGraph = new Map();

  function traverseSchema(schema: unknown, currentSchemaName: string) {
    if (!schemaGraph.has(currentSchemaName)) {
      schemaGraph.set(currentSchemaName, new Set());
    }

    if (schema && typeof schema === "object") {
      for (const [key, child] of Object.entries(schema)) {
        if (key === "$ref" && typeof child === "string") {
          const referencedSchemaName = child.replace(
            "#/components/schemas/",
            ""
          );
          if (!schemaGraph.has(referencedSchemaName)) {
            schemaGraph.set(referencedSchemaName, new Set());
          }
          if (referencedSchemaName !== currentSchemaName) {
            schemaGraph.get(currentSchemaName)!.add(referencedSchemaName);
          }
        } else {
          traverseSchema(schema[key], currentSchemaName);
        }
      }
    }
  }

  const schemas = openApiSpec.components.schemas;
  for (const [schemaName, schema] of Object.entries(schemas)) {
    traverseSchema(schema, schemaName);
  }

  return schemaGraph;
}

// Read YAML file
const yamlFile = fs.readFileSync("../openapi.yaml", "utf8");

// Parse YAML into JavaScript object
const openApiSpec = yaml.load(yamlFile);

// Build schema graph
const schemaGraph = buildSchemaGraph(openApiSpec);

// Find all the referenced schemas from these root schemas
const rootSchemas = ["Nature", "Pokemon", "Stat"];
const referencedSchemas = new Set<string>([...rootSchemas]);

const workList = [...rootSchemas];
while (workList.length > 0) {
  const schemaName = workList.pop()!;
  if (!referencedSchemas.has(schemaName)) {
    referencedSchemas.add(schemaName);
    for (const referencedSchemaName of schemaGraph.get(schemaName)!) {
      workList.push(referencedSchemaName);
    }
  }
}

console.log(referencedSchemas);

const filteredSchemas = Object.entries(openApiSpec.components.schemas)
  .filter(([schemaName]) => referencedSchemas.has(schemaName))
  .reduce((obj, [schemaName, schema]) => {
    obj[schemaName] = schema;
    return obj;
  }, {});

// Write filtered schemas to file
fs.writeFileSync(
  "/tmp/openapi-filtered.yaml",
  yaml.dump({ ...openApiSpec, components: { schemas: filteredSchemas } })
);
