import SchemaBuilder from "@pothos/core";
import ValidationPlugin from "@pothos/plugin-validation";
import { MercuriusContext } from "mercurius";

import GuardPlugin from "./plugins/guards";
import RelayPlugin from "./plugins/relay";

export interface Root<TContext> {
  Context: TContext & MercuriusContext;
}

export interface Context {
  userId?: string;
}

export const builder = new SchemaBuilder<Root<Context>>({
  plugins: [RelayPlugin, ValidationPlugin, GuardPlugin],
});

builder.queryType();
