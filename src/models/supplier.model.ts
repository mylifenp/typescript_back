import { Schema, Model, model } from "mongoose";

export interface Supplier {
  name: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

const supplierSchema = new Schema<Supplier, Model<Supplier>>(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    url: {
      type: String,
    },
  },
  { timestamps: true }
);

supplierSchema.pre("remove", function (next) {
  this.model("Sensor").deleteMany({ supplierId: this._id }, next);
});

export default model<Supplier>("Supplier", supplierSchema);
