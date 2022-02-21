import { UserInputError } from "apollo-server-express";
import { combineResolvers } from "graphql-resolvers";
import { isAdmin, isAuthenticated } from "./authorization";
import {
  megaPixel,
  opticalAreaX,
  opticalAreaY,
  escapeRegex,
  opticalDiagonal,
  aspectRatio,
  centerShiftX,
  centerShiftY,
  nextOpticalClass,
  exactOpticalAreaDiagonal,
} from "../utilities/helpers";

export default {
  Query: {
    sensors: combineResolvers(
      // isAuthenticated,
      async (parent, args, { models }) => await models.Sensor.find()
    ),
    sensor: combineResolvers(
      isAuthenticated,
      async (parent, { id }, { models }) => {
        return await models.Sensor.findById(id);
      }
    ),
    filterSensors: combineResolvers(async (parent, { input }, { models }) => {
      let filter = {};
      Object.keys(input).forEach((key) => {
        const regex = new RegExp(escapeRegex(input[key]), "gi");
        // @ts-ignore
        filter[key] = regex;
      });
      return await models.Sensor.find(filter);
    }),
  },
  Mutation: {
    addSensor: combineResolvers(
      isAuthenticated,
      isAdmin,
      async (parent, { input }, { models }) => {
        console.log("input", input);
        const sensor = await new models.Sensor({
          ...input,
        }).save();
        return { success: true, sensor };
      }
    ),
    updateSensor: combineResolvers(
      isAuthenticated,
      isAdmin,
      async (parent, { id, input }, { models }) => {
        const sensor = await models.Sensor.findById(id);
        console.log("id, input", id, input);
        if (!sensor) throw new UserInputError("Sensor does not exist");
        Object.keys(input).forEach((item) => {
          sensor[item] = input[item];
        });
        return { success: true, sensor: await sensor.save() };
      }
    ),
    deleteSensor: combineResolvers(
      isAuthenticated,
      isAdmin,
      async (parent, { id }, { models }) => {
        const sensor = await models.Sensor.findById(id);
        if (sensor) {
          sensor.remove();
          return { success: true };
        } else {
          return { success: false };
        }
      }
    ),
  },
  Sensor: {
    supplier: combineResolvers(
      isAuthenticated,
      async (sensor, args, { models }) => {
        const data = await models.Supplier.findById(sensor.supplier);
        if (!data) throw new UserInputError("supplier does not exist");
        return data;
      }
    ),
    mega_pixel: combineResolvers(async (sensor, args, { models }) => {
      const { x_resolution, y_resolution } = sensor;
      return megaPixel(x_resolution, y_resolution);
    }),
    optical_area_x: combineResolvers(async (sensor, args, { models }) => {
      const { x_resolution, pixel_size } = sensor;
      return opticalAreaX(x_resolution, pixel_size);
    }),
    optical_area_y: combineResolvers(async (sensor, args, { models }) => {
      const { y_resolution, pixel_size } = sensor;
      return opticalAreaY(y_resolution, pixel_size);
    }),
    optical_area_diagonal: combineResolvers(
      async (sensor, args, { models }) => {
        const { x_resolution, y_resolution, pixel_size } = sensor;
        return opticalDiagonal(x_resolution, y_resolution, pixel_size);
      }
    ),
    next_optical_class: combineResolvers(async (sensor, args, { models }) => {
      const { x_resolution, y_resolution, pixel_size } = sensor;
      return nextOpticalClass(x_resolution, y_resolution, pixel_size);
    }),
    exact_optical_area_diagonal: combineResolvers(
      async (sensor, args, { models }) => {
        const { x_resolution, y_resolution, pixel_size } = sensor;
        return exactOpticalAreaDiagonal(x_resolution, y_resolution, pixel_size);
      }
    ),
    aspect_ratio: combineResolvers(async (sensor, args, { models }) => {
      const { x_resolution, y_resolution } = sensor;
      return aspectRatio(x_resolution, y_resolution);
    }),
    center_shift_x: combineResolvers(async (sensor, args, { models }) => {
      const { housing_x, optical_center_x } = sensor;
      return centerShiftX(housing_x, optical_center_x);
    }),
    center_shift_y: combineResolvers(async (sensor, args, { models }) => {
      const { housing_y, optical_center_y } = sensor;
      return centerShiftY(housing_y, optical_center_y);
    }),
    complete: combineResolvers(
      async (sensor, args, { models }) =>
        await models.Complete.findById(sensor.complete)
    ),
    sensor_type: combineResolvers(
      async (sensor, args, { models }) =>
        await models.SensorType.findById(sensor.sensor_type)
    ),
    shutter_type: combineResolvers(
      async (sensor, args, { models }) =>
        await sensor.shutter_type.map(
          async (id: string) => await models.ShutterType.findById(id)
        )
    ),
    spectrum: combineResolvers(
      async (sensor, args, { models }) =>
        await sensor.spectrum.map(
          async (id: string) => await models.Spectrum.findById(id)
        )
    ),
    glass_lid_type: combineResolvers(
      async (sensor, args, { models }) =>
        await sensor.glass_lid_type.map(
          async (id: string) => await models.GlassLidType.findById(id)
        )
    ),
  },
};
