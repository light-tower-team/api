import { Context } from "..";
import { Guard } from "../plugins/guards";

export function AuthGuard<TParent, TArgs, TContext extends Context>(): Guard<TParent, TArgs, TContext> {
  return {
    canActivate(_parent, _args, ctx) {
      return !!ctx.userId;
    },
  };
}
