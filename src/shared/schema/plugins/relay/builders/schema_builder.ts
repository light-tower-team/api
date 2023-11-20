import SchemaBuilder, { SchemaTypes, verifyRef } from "@pothos/core";

import { ConnectionResult, Edge, PageInfo } from "../types";
import { deriveTypeName } from "./utils/deriveTypeName";

const schemaBuilderProto = SchemaBuilder.prototype as PothosSchemaTypes.SchemaBuilder<SchemaTypes>;

schemaBuilderProto.pageInfo = function () {
  const pageInfoRef = this.objectRef<PageInfo>("PageInfo").implement({
    fields: (t) => ({
      hasNextPage: t.exposeBoolean("hasNextPage", { description: "When paginating forwards, are there more items?" }),
      hasPreviousPage: t.exposeBoolean("hasPreviousPage", {
        description: "When paginating backwards, are there more items?",
      }),
      startCursor: t.exposeString("startCursor", {
        nullable: true,
        description: "When paginating backwards, the cursor to continue.",
      }),
      endCursor: t.exposeString("endCursor", {
        nullable: true,
        description: "When paginating forwards, the cursor to continue.",
      }),
    }),
  });

  return pageInfoRef;
};

schemaBuilderProto.edgeObject = function ({ type }) {
  const typeName = deriveTypeName(type);
  const edgeName = `${typeName}Edge`;

  const edgeRef = this.objectRef<Edge<typeof type>>(edgeName).implement({
    description: `The edge of the ${edgeName}.`,
    fields: (t) => ({
      node: t.field({
        type,
        description: "The item at the end of the edge.",
        resolve: (parent) => parent.node as never,
      }),
      cursor: t.string({
        description: "A cursor for use in pagination.",
        resolve: (parent) => parent.cursor,
      }),
    }),
  });

  return edgeRef;
};

schemaBuilderProto.connectionObject = function ({ type }) {
  verifyRef(type);

  const typeName = deriveTypeName(type);
  const connectionName = `${typeName}Connection`;

  const connectionRef = this.objectRef<ConnectionResult<typeof type>>(connectionName);

  const edgeRef = this.edgeObject({ type });

  this.objectType(connectionRef, {
    description: `The pagination connection of the ${typeName}.`,
    fields: (t) => ({
      totalCount: t.int({
        description: "Identifies the total count of items in the connection.",
        resolve: (parent) => parent.totalCount,
      }),
      pageInfo: t.field({
        type: this.pageInfo(),
        description: "Information to aid in pagination.",
        resolve: (parent) => parent.pageInfo,
      }),
      edges: t.field({
        description: "A list of edges.",
        type: [edgeRef],
        resolve: (parent) => parent.edges,
      }),
      nodes: t.field({
        type: [type],
        description: "A list of nodes.",
        resolve: (parent) => parent.nodes as never,
      }),
    }),
  });

  return connectionRef;
};
