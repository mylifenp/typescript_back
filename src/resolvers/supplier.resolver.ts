import { combineResolvers } from "graphql-resolvers";
import { isAuthenticated, isAdmin } from "./authorization";

export default {
  Query: {
    suppliers: combineResolvers(
      async (parent, args, { models }) => await models.Supplier.find()
    ),
    supplier: combineResolvers(
      async (parent, { id }, { models }) => await models.Supplier.findById(id)
    ),
  },
  Mutation: {
    addSupplier: combineResolvers(
      isAuthenticated,
      isAdmin,
      async (parent, { input }, { models }) => {
        const { name } = input;
        const _supplier = await models.Supplier.findOne({ name });
        if (!!_supplier) return { success: true, supplier: _supplier };
        const supplier = new models.Supplier({ ...input });
        return { success: true, supplier: supplier.save() };
      }
    ),
    updateSupplier: combineResolvers(
      isAuthenticated,
      isAdmin,
      async (parent, { id, input }, { models }) => ({
        success: true,
        supplier: await models.Supplier.findByIdAndUpdate(
          id,
          { ...input },
          { new: true }
        ),
      })
    ),
    deleteSupplier: combineResolvers(
      isAuthenticated,
      isAdmin,
      async (parent, { id }, { models }) => {
        const _supplier = await models.Supplier.findById(id);
        if (_supplier) {
          _supplier.remove();
          return { status: true };
        } else {
          return { status: false };
        }
      }
    ),
  },
  Supplier: {
    sensors: combineResolvers(async (supplier, args, { models }) => {
      return await models.Sensor.find({ supplier: supplier.id });
    }),
  },
};
