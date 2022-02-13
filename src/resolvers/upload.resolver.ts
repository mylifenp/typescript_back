import fs from "fs";
import { combineResolvers } from "graphql-resolvers";
import { isAuthenticated, isAdmin } from "./authorization";
import { finished } from "stream/promises";

export default {
  Query: {
    getFileUrl: combineResolvers(
      isAuthenticated,
      async (parent, { id }, { models }) => ({
        url: "https://via.placeholder.com/150",
        thumbnail: "https://via.placeholder.com/40",
      })
    ),
  },
  Mutation: {
    singleUpload: combineResolvers(
      isAuthenticated,
      isAdmin,
      async (parent, { file }, { me }) => {
        const { createReadStream, filename, mimetype, encoding } = await file;
        const stream = createReadStream();
        const out = fs.createWriteStream("local_file_output.txt");
        stream.pipe(out);
        finished(out);
        return { filename, mimetype, encoding };
      }
    ),
  },
};
