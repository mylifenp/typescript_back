import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    sensors: [Sensor!]
    sensor(id: ID!): Sensor!
    filterSensors(input: SensorFilterInput): [Sensor!]
  }
  extend type Mutation {
    addSensor(input: SensorInput!): AddSensorResult!
    updateSensor(id: ID!, input: SensorInput!): UpdateSensorResult!
    deleteSensor(id: ID!): DeleteSensorResult!
  }
  type DeleteSensorResult {
    success: Boolean!
  }
  type AddSensorResult {
    success: Boolean!
    sensor: Sensor!
  }
  type UpdateSensorResult {
    success: Boolean!
    sensor: Sensor
  }
  input SensorFilterInput {
    sensor_model: String
    glass_index: String
  }
  type Sensor {
    id: ID!
    sensor_model: String
    entry_year: Int
    end_of_life: Int
    x_resolution: Int
    y_resolution: Int
    pixel_size: Float
    housing_x: Float
    housing_y: Float
    optical_center_x: Float
    optical_center_y: Float
    housing_glass: Float
    glass_lid_thickness: Float
    focal_plane_from_bottom: Float
    glass_index: String
    pixel_lens_cra: Float
    alternative_designation: String
    other_info: String
    mega_pixel: Float
    optical_area_x: Float
    optical_area_y: Float
    optical_area_diagonal: Float
    next_optical_class: Float
    exact_optical_area_diagonal: String
    aspect_ratio: String
    center_shift_x: Float
    center_shift_y: Float
    supplier: Supplier
    complete: Complete
    sensor_type: SensorType
    shutter_type: [ShutterType]
    spectrum: [Spectrum]
    glass_lid_type: [GlassLidType]
    updatedAt: Date
  }
  input SensorInput {
    sensor_model: String
    entry_year: Int
    end_of_life: Int
    x_resolution: Int
    y_resolution: Int
    pixel_size: Float
    housing_x: Float
    housing_y: Float
    optical_center_x: Float
    optical_center_y: Float
    housing_glass: Float
    glass_lid_thickness: Float
    focal_plane_from_bottom: Float
    glass_index: String
    pixel_lens_cra: Float
    alternative_designation: String
    other_info: String
    supplier: ID
    complete: ID
    sensor_type: ID
    shutter_type: [ID]
    spectrum: [ID]
    glass_lid_type: [ID]
  }
`;
