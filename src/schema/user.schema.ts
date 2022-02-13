import { gql } from "apollo-server-express";
import { ROLES } from "../models/user.model";


export default gql`
  extend type Query {
    users: [User!]
    user(id: ID!): User
    me: User
  }
  extend type Mutation {
    signUp(input: UserInput!): User!
    signIn(email: String!, password: String!): Token!
    makeAdmin(id: ID!): User!
    makeModerator(id: ID!): User!
    deleteUser(id: ID!): DeleteUserResult!
  }
  type DeleteUserResult {
    status: Boolean!
  }
  type User {
    id: ID!
    email: String!
    role: Roles!
  }
  input UserInput {
    email: String!
    password: String!
  }
  type Token {
    token: String!
    expires: String!
  }
  enum Roles {
    ${Object.keys(ROLES)}
  }
`;