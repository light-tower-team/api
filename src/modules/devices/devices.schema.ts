import { builder } from "../../shared/schema/builder";

export interface DeviceShape {
  id: number;
  name: string;
}

export const Device = builder.objectRef<DeviceShape>("Device").implement({
  fields: (t) => ({
    id: t.exposeInt("id"),
    name: t.exposeString("name"),
  }),
});
