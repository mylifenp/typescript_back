import { Schema, Model, model } from "mongoose";

export enum COMPLETE {
  YES,
  NO,
}

export interface Complete {
  name: string;
}

const completeSchema = new Schema({
  name: {
    type: String,
    enum: COMPLETE,
    default: COMPLETE.NO,
  },
});

export default model<Complete>("Complete", completeSchema);
