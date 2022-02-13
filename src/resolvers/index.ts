import { GraphQLUpload } from "graphql-upload";
import { GraphQLDateTime } from "graphql-scalars";
import userResolver from "./user.resolver";
import supplierResolver from "./supplier.resolver";
import uploadResolver from "./upload.resolver";
import spectrumResolver from "./spectrum.resolver";
import shutterTypeResolver from "./shutter_type.resolver";
import glassLidTypeResolver from "./glass_lid_type.resolver";
import sensorTypeResolver from "./sensor_type.resolver";
import sensorResolver from "./sensor.resolver";

const customScalarResolver = {
  Date: GraphQLDateTime,
  Upload: GraphQLUpload,
};

export default [
  customScalarResolver,
  userResolver,
  supplierResolver,
  uploadResolver,
  spectrumResolver,
  shutterTypeResolver,
  glassLidTypeResolver,
  sensorTypeResolver,
  sensorResolver,
];
