import { FieldKind, RootFieldBuilder, SchemaTypes } from "@pothos/core";
import { z } from "zod";

const ConnectionArgsSchema = z.object({
  first: z.number().positive().nullable().optional(),
  last: z.number().positive().nullable().optional(),
  after: z.string().nullable().optional(),
  before: z.string().nullable().optional(),
});

const fieldBuilderProto = RootFieldBuilder.prototype as PothosSchemaTypes.RootFieldBuilder<
  SchemaTypes,
  unknown,
  FieldKind
>;

fieldBuilderProto.connection = function connection({ type, ...fieldOptions }) {
  const connectionRef = this.builder.connectionObject({
    type,
  });

  const fieldRef = this.field({
    ...fieldOptions,
    type: connectionRef,
    args: {
      ...fieldOptions.args,
      ...this.arg.connectionArgs(),
    },
    validate: {
      schema: ConnectionArgsSchema,
    },
  } as never);

  return fieldRef;
};
