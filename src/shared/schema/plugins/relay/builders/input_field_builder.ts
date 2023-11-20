import { InputFieldBuilder } from "@pothos/core";

type DefaultSchemaTypes = PothosSchemaTypes.ExtendDefaultTypes<object>;

const inputFieldBuilder = InputFieldBuilder.prototype as PothosSchemaTypes.InputFieldBuilder<
  DefaultSchemaTypes,
  "Arg" | "InputObject"
>;

inputFieldBuilder.connectionArgs = function () {
  return {
    first: this.int({ required: false, description: "Returns the first n elements from the list." }),
    last: this.int({ required: false, description: "Returns the last n elements from the list." }),
    after: this.string({
      required: false,
      description: "Returns the elements in the list that come after the specified cursor.",
    }),
    before: this.string({
      required: false,
      description: "Returns the elements in the list that come before the specified cursor.",
    }),
  };
};
