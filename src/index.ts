import "dotenv/config";
import { createStream } from "rotating-file-stream";
import path from "path";
import cors from "cors";
import morgan from "morgan";
import http from "http";
import jwt from "jsonwebtoken";
import DataLoader from "dataloader";
import serveStatic from "serve-static";
import express, { Request } from "express";
import { ApolloServer, AuthenticationError } from "apollo-server-express";
import { graphqlUploadExpress } from "graphql-upload";
import { PORT, ENV, SECRET, HOST } from "./config";
import loaders from "./loaders";
import models, { connectDb } from "./models";
import schema from "./schema";
import resolvers from "./resolvers";

// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true,
// };

async function startBackend() {
  const app = express();
  const accessLogStream = createStream("access.log", {
    interval: "1d",
    path: path.join(__dirname, "log"),
  });
  // app.use(cors(corsOptions));
  app.use(cors());
  // use static
  app.use(serveStatic("static"));
  app.use(
    morgan("dev", {
      skip: (req, res) => res.statusCode < 400,
    })
  );

  // logging all request to access.log
  app.use(
    morgan("combined", {
      stream: accessLogStream,
    })
  );
  // used for upload
  app.use(graphqlUploadExpress());

  const validateToken = (token: string) => {
    return jwt.verify(token, SECRET);
  };

  const getMe = async (req: Request) => {
    const token = req.headers["token"];
    if (token) {
      try {
        // return await jwt.verify(token, process.env.SECRET);
        return validateToken(token as string);
      } catch (e) {
        throw new AuthenticationError("Your session expired. Sign in again.");
      }
    }
  };

  const connection = await connectDb();

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    introspection: ENV !== "production",
    plugins: [],
    formatError: (error) => {
      const message = error.message
        .replace("SequelizeValidationError: ", "")
        .replace("Validation error: ", "");
      return {
        ...error,
        message,
      };
    },
    context: async ({ req, connection }: any) => {
      if (connection) {
        return {
          models,
          loaders: {
            user: new DataLoader((keys) =>
              loaders.user.batchUsers(keys, models)
            ),
          },
        };
      }
      if (req) {
        const me = await getMe(req);
        return {
          models,
          me,
          secret: SECRET,
          loaders: {
            user: new DataLoader((keys) =>
              loaders.user.batchUsers(keys, models)
            ),
          },
        };
      }
    },
  });

  const shutdown = function () {
    // clean up your resources and exit
    console.log("cleaning up before shutdown");
    process.exit();
  };

  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });
  const httpServer = http.createServer(app);

  if (!connection) {
    console.log("connection could not be established");
    shutdown();
  }
  httpServer.listen(PORT, () =>
    console.log(`Lenses_back reachable at ${HOST}:${PORT}${server.graphqlPath}`)
  );

  process.on("SIGINT", function onSigint() {
    console.log("terminating the service onSigint");
    shutdown();
  });

  process.on("SIGTERM", function onSigterm() {
    console.log("terminating the service onSigterm");
    shutdown();
  });

  return { server, app };
}
startBackend();
