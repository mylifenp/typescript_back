import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    sensorTypes: [SensorType!]!
    sensorType(id: ID!): SensorType!
  }
  extend type Mutation {
    addSensorType(input: SensorTypeInput): AddSensorTypeResult!
    updateSensorType(id: ID!, input: SensorTypeInput): UpdateSensorTypeResult!
    deleteSensorType(id: ID!): DeleteSensorTypeResult
  }
  type DeleteSensorTypeResult {
    success: Boolean!
  }
  type AddSensorTypeResult {
    success: Boolean!
    sensorType: SensorType!
  }
  type UpdateSensorTypeResult {
    success: Boolean!
    sensorType: SensorType!
  }
  type SensorType {
    id: ID!
    name: String!
  }
  input SensorTypeInput {
    name: String!
  }
`;
