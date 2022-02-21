import { combineResolvers } from "graphql-resolvers";
import { isAuthenticated, isAdmin } from "./authorization";

export default {
  Query: {
    complete: combineResolvers(
      isAuthenticated,
      async (parent, { id }, { models }) => await models.Complete.findById(id)
    ),
  },
};
