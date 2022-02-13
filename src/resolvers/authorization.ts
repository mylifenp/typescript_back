import { ForbiddenError } from "apollo-server-express";
import { skip } from "graphql-resolvers";
import { ROLES } from "../models/user.model";

export const isAdmin = (parent: any, args: any, { me }: any) => {
  if (me.role !== ROLES.ADMIN)
    throw new ForbiddenError("Admin privileges required.");
  skip;
};

export const isAuthenticated = (parent: any, args: any, { me }: any) =>
  me ? skip : new ForbiddenError("Not authenticated as user.");
