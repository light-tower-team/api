import { ObjectRef, OutputType, SchemaTypes } from "@pothos/core";

export function deriveTypeName<Type extends OutputType<Types>, Types extends SchemaTypes>(type: Type): string {
  if (typeof type === "string") {
    return type;
  }

  if (type instanceof ObjectRef) {
    return type.name;
  }

  throw new Error(`Unknown type: ${type.toString()}`);
}
