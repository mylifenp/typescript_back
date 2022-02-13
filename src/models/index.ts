import mongoose from "mongoose";
import User from "./user.model";
import Supplier from "./supplier.model";
import SensorType from "./sensor_type.model";
import ShutterType from "./shutter_type.model";
import Spectrum from "./spectrum.model";
import GlassLidType from "./glass_lid_type.model";
import Sensor from "./sensor.model";
import Complete from "./complete.model";
import {
  ENV,
  DATABASE_URL,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
} from "../config";

const options = {
  auth: {
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
  },
};

const connectDb = () => {
  if (ENV === "production") {
    return mongoose.connect(DATABASE_URL, options);
  }
  if (ENV === "development") {
    return mongoose.connect(DATABASE_URL, options);
  }
  console.log(
    "Please set an environment NODE_ENV= either development, production or TEST"
  );
};

const models = {
  User,
  Supplier,
  SensorType,
  ShutterType,
  Spectrum,
  GlassLidType,
  Sensor,
  Complete,
};

export { connectDb };
export default models;
