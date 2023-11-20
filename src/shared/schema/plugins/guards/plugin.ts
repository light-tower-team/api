import "./global_types";
import SchemaBuilder, { BasePlugin, InputFieldMap, PothosFieldConfig, SchemaTypes } from "@pothos/core";
import { GraphQLFieldResolver } from "graphql";

const PLUGIN_NAME = "GuardPlugin" as const;

export class GuardPlugin<TTypes extends SchemaTypes> extends BasePlugin<TTypes> {
  override wrapResolve(
    resolver: GraphQLFieldResolver<unknown, TTypes["Context"], object>,
    fieldConfig: PothosFieldConfig<TTypes>,
  ): GraphQLFieldResolver<unknown, TTypes["Context"], object> {
    return async (parent, args, context, info) => {
      if ("guards" in fieldConfig.pothosOptions && fieldConfig.pothosOptions.guards?.length) {
        for await (const guard of fieldConfig.pothosOptions.guards) {
          await guard.canActivate(parent as TTypes["Root"], args as InputFieldMap, context, info);
        }
      }

      return resolver(parent, args, context, info);
    };
  }
}

SchemaBuilder.registerPlugin(PLUGIN_NAME, GuardPlugin);

export default PLUGIN_NAME;
