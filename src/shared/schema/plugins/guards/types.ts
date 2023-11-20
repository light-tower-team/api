import { GraphQLResolveInfo } from "graphql";

export interface Guard<TParent, TArgs, TContext> {
  canActivate(parent: TParent, args: TArgs, ctx: TContext, info: GraphQLResolveInfo): boolean | PromiseLike<boolean>;
}
