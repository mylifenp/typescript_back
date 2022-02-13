import { Schema, Model, model } from "mongoose";

export interface ShutterType {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const shutterTypeSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
});

export default model<ShutterType>("ShutterType", shutterTypeSchema);
