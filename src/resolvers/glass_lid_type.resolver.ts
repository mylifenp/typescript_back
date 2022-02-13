import { combineResolvers } from "graphql-resolvers";
import { isAuthenticated, isAdmin } from "./authorization";

export default {
  Query: {
    glassLidTypes: combineResolvers(
      isAuthenticated,
      async (parent, args, { models }) => await models.GlassLidType.find()
    ),
    glassLidType: combineResolvers(
      isAuthenticated,
      async (parent, { id }, { models }) =>
        await models.GlassLidType.findById(id)
    ),
  },
  Mutation: {
    addGlassLidType: combineResolvers(
      isAuthenticated,
      isAdmin,
      async (parent, { input }, { models }) => {
        const { name } = input;
        const _glassLidType = await models.GlassLidType.findOne({ name });
        if (!!_glassLidType)
          return { success: true, glassLidType: _glassLidType };
        const glassLidType = new models.GlassLidType({ ...input }).save();
        return { success: true, glassLidType };
      }
    ),
    updateGlassLidType: combineResolvers(
      isAuthenticated,
      isAdmin,
      async (parent, { id, input }, { models }) => ({
        success: true,
        glassLidType: await models.GlassLidType.findByIdAndUpdate(
          id,
          { ...input },
          { new: true }
        ),
      })
    ),
    deleteGlassLidType: combineResolvers(
      isAuthenticated,
      isAdmin,
      async (parent, { id }, { models }) => {
        const _glassLidType = await models.GlassLidType.findById(id);
        if (_glassLidType) {
          _glassLidType.remove();
          return { success: true };
        } else {
          return { success: false };
        }
      }
    ),
  },
};
