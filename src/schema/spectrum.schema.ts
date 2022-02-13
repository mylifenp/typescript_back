import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    spectrums: [Spectrum!]!
    spectrum(id: ID!): Spectrum!
  }
  extend type Mutation {
    addSpectrum(input: SpectrumInput): AddSpectrumResult!
    updateSpectrum(id: ID!, input: SpectrumInput): UpdateSpectrumResult!
    deleteSpectrum(id: ID!): DeleteSpectrumResult
  }
  type DeleteSpectrumResult {
    success: Boolean!
  }
  type AddSpectrumResult {
    success: Boolean!
    spectrum: Spectrum!
  }
  type UpdateSpectrumResult {
    success: Boolean!
    spectrum: Spectrum!
  }
  type Spectrum {
    id: ID!
    name: String!
  }
  input SpectrumInput {
    name: String!
  }
`;
