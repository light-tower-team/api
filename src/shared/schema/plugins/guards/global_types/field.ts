import { FieldNullability, InputFieldMap, SchemaTypes, TypeParam } from "@pothos/core";

import { Guard } from "../types";

declare global {
  export namespace PothosSchemaTypes {
    export interface FieldOptions<
      Types extends SchemaTypes,
      ParentShape,
      Type extends TypeParam<Types>,
      Nullable extends FieldNullability<Type>,
      Args extends InputFieldMap,
    > {
      guards?: Guard<ParentShape, Args, Types["Context"]>[];
    }
  }
}
