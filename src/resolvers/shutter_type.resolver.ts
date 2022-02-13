import { combineResolvers } from "graphql-resolvers";
import { isAuthenticated, isAdmin } from "./authorization";

export default {
  Query: {
    shutterTypes: combineResolvers(
      isAuthenticated,
      async (parent, args, { models }) => await models.ShutterType.find()
    ),
    shutterType: combineResolvers(
      isAuthenticated,
      async (parent, { id }, { models }) =>
        await models.ShutterType.findById(id)
    ),
  },
  Mutation: {
    addShutterType: combineResolvers(
      isAuthenticated,
      isAdmin,
      async (parent, { input }, { models }) => {
        const { name } = input;
        const _shutterType = await models.ShutterType.findOne({ name });
        if (!!_shutterType) return { success: true, shutterType: _shutterType };
        const shutterType = new models.ShutterType({ ...input }).save();
        return { success: true, shutterType };
      }
    ),
    updateShutterType: combineResolvers(
      isAuthenticated,
      isAdmin,
      async (parent, { id, input }, { models }) => ({
        success: true,
        shutterType: await models.ShutterType.findByIdAndUpdate(
          id,
          { ...input },
          { new: true }
        ),
      })
    ),
    deleteShutterType: combineResolvers(
      isAuthenticated,
      isAdmin,
      async (parent, { id }, { models }) => {
        const _shutterType = await models.ShutterType.findById(id);
        if (_shutterType) {
          _shutterType.remove();
          return { success: true };
        } else {
          return { success: false };
        }
      }
    ),
  },
};
