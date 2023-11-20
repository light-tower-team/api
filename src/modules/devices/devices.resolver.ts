import { builder } from "@shared/schema/builder";
import { AuthGuard } from "@shared/schema/guards";

import { Device } from "./devices.schema";

builder.queryField("getDevices", (t) =>
  t.connection({
    type: Device,
    description: "Returns devices.",
    guards: [AuthGuard()],
    resolve() {
      return {
        totalCount: 0,
        nodes: [],
        edges: [],
        pageInfo: {
          startCursor: null,
          endCursor: null,
          hasPreviousPage: false,
          hasNextPage: false,
        },
      };
    },
  }),
);
