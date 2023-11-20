import { InputFieldRef, SchemaTypes } from "@pothos/core";

declare global {
  export namespace PothosSchemaTypes {
    export interface DefaultConnectionArguments {
      first?: number | null | undefined;
      last?: number | null | undefined;
      after?: string | null | undefined;
      before?: string | null | undefined;
    }

    export interface InputFieldBuilder<Types extends SchemaTypes, Kind extends "Arg" | "InputObject"> {
      connectionArgs: () => {
        [K in keyof DefaultConnectionArguments]-?: InputFieldRef<DefaultConnectionArguments[K], Kind>;
      };
    }
  }
}
