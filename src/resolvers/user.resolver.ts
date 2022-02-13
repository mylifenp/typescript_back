import jwt, { Secret } from "jsonwebtoken";
import { combineResolvers } from "graphql-resolvers";
import { AuthenticationError, UserInputError } from "apollo-server-express";
import { isAdmin, isAuthenticated } from "./authorization";
import { User } from "../types";
import { ROLES } from "../models/user.model";
import { TOKEN_EXPIRES_IN } from "../config";

const createToken = async (user: User, secret: Secret, expiresIn = 3600) => {
  const { id, email, role } = user;
  return jwt.sign({ id, email, role }, secret, { expiresIn });
};

export default {
  Query: {
    users: combineResolvers(
      // isAdmin,
      async (parent, args, { models }: any) => await models.User.find()
    ),
    user: combineResolvers(
      isAuthenticated,
      async (parent, { id }, { models }) => await models.User.findById(id)
    ),
    me: combineResolvers(
      isAuthenticated,
      async (parent, args, { models, me }) => {
        if (!me) return null;
        return await models.User.findById(me.id);
      }
    ),
  },
  Mutation: {
    signUp: combineResolvers(async (parent, { input }, { models }) => {
      let user = await models.User.findByEmail(input.email);
      if (!user) {
        user = new models.User({ ...input });
        user.save();
      } else {
        return user;
      }
      return user;
    }),
    signIn: combineResolvers(
      async (parent, { email, password }, { models, secret }) => {
        const user = await models.User.findByEmail(email);
        if (!user) throw new UserInputError("User with email does not exist");
        const isValid = await user.validatePassword(password);
        if (!isValid) throw new AuthenticationError("Invalid password.");
        return {
          token: createToken(
            user,
            secret,
            parseInt(TOKEN_EXPIRES_IN as string, 10)
          ),
          expires: TOKEN_EXPIRES_IN,
        };
      }
    ),
    makeAdmin: combineResolvers(isAdmin, async (parent, { id }, { models }) => {
      const user = await models.User.findById(id);
      if (!user) throw new UserInputError("User does not exist");
      user.role = ROLES.ADMIN;
      return await user.save();
    }),
    makeModerator: combineResolvers(
      isAdmin,
      async (parent, { id }, { models }) => {
        const user = await models.User.findById(id);
        if (!user) throw new UserInputError("User does not exist");
        user.role = ROLES.MODERATOR;
        return await user.save();
      }
    ),
    deleteUser: combineResolvers(
      isAdmin,
      async (parent, { id }, { models }) => {
        const user = await models.User.findById(id);
        if (user) {
          user.remove();
          return { status: true };
        } else {
          return { status: false };
        }
      }
    ),
  },
};
