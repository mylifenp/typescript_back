import { Schema, model, Model } from "mongoose";

export enum COMPLETE {
  YES,
  NO,
}

export interface Complete {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const completeSchema = new Schema(
  {
    name: {
      type: String,
      enum: COMPLETE,
      default: COMPLETE.NO,
    },
  },
  {
    timestamps: true,
  }
);

export default model<Complete>("Complete", completeSchema);
