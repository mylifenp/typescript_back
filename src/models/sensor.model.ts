import { Schema, Model, model } from "mongoose";
import { Complete } from "./complete.model";
import { GlassLidType } from "./glass_lid_type.model";
import { SensorType } from "./sensor_type.model";
import { ShutterType } from "./shutter_type.model";
import { Spectrum } from "./spectrum.model";
import { Supplier } from "./supplier.model";

export interface Sensor {
  deleted: boolean;
  sensor_model: string;
  entry_year?: number;
  end_of_life?: number;
  x_resolution?: number;
  y_resolution?: number;
  pixel_size?: number;
  housing_x?: number;
  housing_y?: number;
  optical_center_x?: number;
  optical_center_y?: number;
  housing_glass?: number;
  glass_lid_thickness?: number;
  focal_plane_from_bottom?: number;
  glass_index?: string;
  pixel_lens_cra?: number;
  alternative_designation?: string;
  other_info?: string;
  complete: Complete;
  supplier?: Supplier;
  sensor_type?: SensorType;
  shutter_type?: ShutterType[];
  spectrum?: Spectrum[];
  glass_lid_type?: GlassLidType[];
  updatedAt?: Date;
  createdAt?: Date;
}

const sensorSchema = new Schema<Sensor, Model<Sensor>>(
  {
    deleted: {
      type: Boolean,
      default: false,
    },
    sensor_model: {
      type: String,
    },
    entry_year: { type: Number },
    end_of_life: { type: Number },
    x_resolution: { type: Number },
    y_resolution: { type: Number },
    pixel_size: { type: Number },
    housing_x: {
      type: Number,
    },
    housing_y: { type: Number },
    optical_center_x: { type: Number },
    optical_center_y: { type: Number },
    housing_glass: { type: Number },
    glass_lid_thickness: { type: Number },
    focal_plane_from_bottom: { type: Number },
    glass_index: { type: String },
    pixel_lens_cra: { type: Number },
    alternative_designation: { type: String },
    other_info: { type: String },
    complete: { type: Schema.Types.ObjectId, ref: "Complete" },
    supplier: { type: Schema.Types.ObjectId, ref: "Supplier" },
    sensor_type: { type: Schema.Types.ObjectId, ref: "SensorType" },
    shutter_type: [{ type: Schema.Types.ObjectId, ref: "ShutterType" }],
    spectrum: [{ type: Schema.Types.ObjectId, ref: "Spectrum" }],
    glass_lid_type: [{ type: Schema.Types.ObjectId, ref: "GlassLidType" }],
  },
  {
    timestamps: true,
  }
);

export default model<Sensor>("Sensor", sensorSchema);
