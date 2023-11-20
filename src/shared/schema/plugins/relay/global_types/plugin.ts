import { SchemaTypes } from "@pothos/core";

import type { RelayPlugin } from "../plugin";

declare global {
  export namespace PothosSchemaTypes {
    export interface Plugins<Types extends SchemaTypes> {
      RelayPlugin: RelayPlugin<Types>;
    }
  }
}
