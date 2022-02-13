import { Schema, Model, model } from "mongoose";

export interface Spectrum {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const spectrumSchema = new Schema<Spectrum, Model<Spectrum>>(
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

export default model<Spectrum>("Spectrum", spectrumSchema);
