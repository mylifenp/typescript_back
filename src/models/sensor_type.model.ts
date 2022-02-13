import { Schema, Model, model } from "mongoose";

export interface SensorType {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const sensorTypeSchema = new Schema<SensorType, Model<SensorType>>(
  {
    name: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<SensorType>("SensorType", sensorTypeSchema);
