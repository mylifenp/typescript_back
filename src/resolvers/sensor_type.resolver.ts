import { combineResolvers } from "graphql-resolvers";
import { isAuthenticated, isAdmin } from "./authorization";

export default {
  Query: {
    sensorTypes: combineResolvers(
      isAuthenticated,
      async (parent, args, { models }) => await models.SensorType.find()
    ),
    sensorType: combineResolvers(
      isAuthenticated,
      async (parent, { id }, { models }) => await models.SensorType.findById(id)
    ),
  },
  Mutation: {
    addSensorType: combineResolvers(
      isAuthenticated,
      isAdmin,
      async (parent, { input }, { models }) => {
        const { name } = input;
        const _sensorType = await models.SensorType.findOne({ name });
        if (!!_sensorType) return { success: true, sensorType: _sensorType };
        const sensorType = new models.SensorType({ ...input }).save();
        return { success: true, sensorType };
      }
    ),
    updateSensorType: combineResolvers(
      isAuthenticated,
      isAdmin,
      async (parent, { id, input }, { models }) => ({
        success: true,
        sensorType: await models.SensorType.findByIdAndUpdate(
          id,
          { ...input },
          { new: true }
        ),
      })
    ),
    deleteSensorType: combineResolvers(
      isAuthenticated,
      isAdmin,
      async (parent, { id }, { models }) => {
        const _sensorType = await models.SensorType.findById(id);
        if (_sensorType) {
          _sensorType.remove();
          return { success: true };
        } else {
          return { success: false };
        }
      }
    ),
  },
};
