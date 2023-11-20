import { SchemaTypes } from "@pothos/core";

import type { GuardPlugin } from "../plugin";

declare global {
  export namespace PothosSchemaTypes {
    export interface Plugins<Types extends SchemaTypes> {
      GuardPlugin: GuardPlugin<Types>;
    }
  }
}
