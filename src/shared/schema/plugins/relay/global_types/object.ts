import { OutputType, SchemaTypes } from "@pothos/core";

import { ConnectionResult, Edge, PageInfo } from "../types";

declare global {
  export namespace PothosSchemaTypes {
    export interface SchemaBuilder<Types extends SchemaTypes> {
      pageInfo: () => ObjectRef<PageInfo>;

      edgeObject: <Type extends OutputType<Types>>(options: { type: Type }) => ObjectRef<Edge<Type>>;

      connectionObject: <Type extends OutputType<Types>>(connectionOptions: {
        type: Type;
      }) => ObjectRef<ConnectionResult<Type>>;
    }
  }
}
