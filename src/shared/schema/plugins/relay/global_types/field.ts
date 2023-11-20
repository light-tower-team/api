import {
  FieldKind,
  FieldOptionsFromKind,
  FieldRef,
  InputFieldMap,
  InputFieldsFromShape,
  InputShapeFromFields,
  OutputType,
  Resolver,
  SchemaTypes,
} from "@pothos/core";

import { ConnectionResult } from "../types";

declare global {
  export namespace PothosSchemaTypes {
    export interface ConnectionFieldOptions<
      Types extends SchemaTypes,
      ParentShape,
      Type extends OutputType<Types>,
      Args extends InputFieldMap,
      ResolveReturnShape,
    > {
      type: Type;
      resolve: Resolver<
        ParentShape,
        DefaultConnectionArguments & InputShapeFromFields<Args>,
        Types["Context"],
        ConnectionResult<Type>,
        ResolveReturnShape
      >;
    }

    export interface RootFieldBuilder<Types extends SchemaTypes, ParentShape, Kind extends FieldKind = FieldKind> {
      connection: <
        Type extends OutputType<Types>,
        Args extends InputFieldMap,
        Nullable extends boolean,
        ResolveShape,
        ResolveReturnShape,
      >(
        options: FieldOptionsFromKind<
          Types,
          ParentShape,
          Type,
          Nullable,
          InputFieldsFromShape<DefaultConnectionArguments> & (InputFieldMap extends Args ? unknown : Args),
          Kind,
          ResolveShape,
          ResolveReturnShape
        > extends infer FieldOptions
          ? ConnectionFieldOptions<Types, ParentShape, Type, Args, ResolveReturnShape> &
              Omit<FieldOptions, "type" | "resolve">
          : never,
      ) => FieldRef<ConnectionResult<Type>>;
    }
  }
}
