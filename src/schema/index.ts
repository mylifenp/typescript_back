import { gql } from "apollo-server-express";
import spectrumSchema from "./spectrum.schema";
import supplierSchema from "./supplier.schema";
import uploadSchema from "./upload.schema";
import userSchema from "./user.schema";
import shutterTypeSchema from "./shutter_type.schema";
import completeSchema from "./complete.schema";
import sensorSchema from "./sensor.schema";
import sensorTypeSchema from "./sensor_type.schema";
import glassLidTypeSchema from "./glass_lid_type.schema";

const linkSchema = gql`
  scalar Date
  scalar Upload

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  # type Subscription {
  #   _: Boolean
  # }
`;

export default [
  linkSchema,
  userSchema,
  supplierSchema,
  uploadSchema,
  spectrumSchema,
  shutterTypeSchema,
  completeSchema,
  sensorSchema,
  sensorTypeSchema,
  glassLidTypeSchema,
];
