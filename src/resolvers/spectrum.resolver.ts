import { combineResolvers } from "graphql-resolvers";
import { isAuthenticated, isAdmin } from "./authorization";

export default {
  Query: {
    spectrums: combineResolvers(
      isAuthenticated,
      async (parent, args, { models }) => await models.Spectrum.find()
    ),
    spectrum: combineResolvers(
      isAuthenticated,
      async (parent, { id }, { models }) => await models.Spectrum.findById(id)
    ),
  },
  Mutation: {
    addSpectrum: combineResolvers(
      isAuthenticated,
      isAdmin,
      async (parent, { input }, { models }) => {
        const { name } = input;
        const _spectrum = await models.Spectrum.findOne({ name });
        if (!!_spectrum) return { success: true, spectrum: _spectrum };
        const spectrum = new models.Spectrum({ ...input }).save();
        return { success: true, spectrum };
      }
    ),
    updateSpectrum: combineResolvers(
      isAuthenticated,
      isAdmin,
      async (parent, { id, input }, { models }) => ({
        success: true,
        spectrum: await models.Spectrum.findByIdAndUpdate(
          id,
          { ...input },
          { new: true }
        ),
      })
    ),
    deleteSpectrum: combineResolvers(
      isAuthenticated,
      isAdmin,
      async (parent, { id }, { models }) => {
        const _spectrum = await models.Spectrum.findById(id);
        if (_spectrum) {
          _spectrum.remove();
          return { success: true };
        } else {
          return { success: false };
        }
      }
    ),
  },
};
