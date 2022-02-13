import { gql } from "apollo-server-express";

export default gql`
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }
  type UploadResult {
    url: String!
    thumbnail: String!
  }
  type Query {
    getFileUrl(id: ID!): UploadResult!
  }
  type Mutation {
    singleUpload(file: Upload!): File!
  }
`;
