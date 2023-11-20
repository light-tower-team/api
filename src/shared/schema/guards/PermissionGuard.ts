import { Guard } from "../plugins/guards";

export function PermissionGuard<TParent, TArgs, TContext>(): Guard<TParent, TArgs, TContext> {
  return {
    canActivate() {
      return true;
    },
  };
}
