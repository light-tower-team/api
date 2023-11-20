import "./global_types";
import "./builders";
import SchemaBuilder, { BasePlugin, SchemaTypes } from "@pothos/core";

const PLUGIN_NAME = "RelayPlugin" as const;

export class RelayPlugin<TTypes extends SchemaTypes> extends BasePlugin<TTypes> {}

SchemaBuilder.registerPlugin(PLUGIN_NAME, RelayPlugin);

export default PLUGIN_NAME;
