import "@modules/devices";
import { lexicographicSortSchema, printSchema } from "graphql";
import fs from "node:fs";
import path from "node:path";

import { builder } from "./builder";

export const schema = builder.toSchema({});
const schemaAsString = printSchema(lexicographicSortSchema(schema));

fs.writeFileSync(path.join(process.cwd(), "./schema.graphql"), schemaAsString);
