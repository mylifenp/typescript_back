import { Schema, Model, model } from "mongoose";

export interface GlassLidType {
  name: string;
}

const glassLidTypeSchema = new Schema<GlassLidType, Model<GlassLidType>>({
  name: {
    type: String,
    unique: true,
  },
});

export default model<GlassLidType>("GlassLidType", glassLidTypeSchema);
