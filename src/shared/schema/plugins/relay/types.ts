export interface RelayConnectionPluginOptions {}

export type Cursor = string;

export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: Cursor | null | undefined;
  endCursor?: Cursor | null | undefined;
}

export interface Edge<TNode> {
  cursor: Cursor;
  node: TNode;
}

export interface ConnectionResult<TNode> {
  totalCount: number;
  nodes: TNode[];
  edges: Edge<TNode>[];
  pageInfo: PageInfo;
}
