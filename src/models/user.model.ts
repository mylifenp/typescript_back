import { Schema, Model, model } from "mongoose";
import bcrypt from "bcrypt";
import isEmail from "validator/lib/isEmail";

export enum ROLES {
  USER = "USER",
  MODERATOR = "MODERATOR",
  ADMIN = "ADMIN",
}

export interface User {
  email: string;
  firstName?: string;
  lastName?: string;
  password: string;
  role: ROLES;
  fullName: string;
  createdAt: Date;
  updatedAt: Date;
  validatePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<User, Model<User>>(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      validate: [isEmail, "No valid email address provided."],
    },
    password: {
      type: String,
      required: true,
      minlength: 7,
      maxlength: 100,
    },
    firstName: String,
    lastName: String,
    role: {
      type: String,
      enum: ROLES,
      default: ROLES.USER,
    },
  },
  {
    timestamps: true,
  }
);

// Virtual method
userSchema.virtual("fullName").get(function (this: User) {
  return `${this.firstName} ${this.lastName}`;
});

userSchema.statics.findByEmail = async function (email) {
  let user = await this.findOne({ email });
  if (!user) {
    user = await this.findOne({ email });
  }
  return user;
};

userSchema.pre("remove", function (next) {
  this.model("Message").deleteMany({ userId: this._id }, next);
});

userSchema.pre("save", async function (next) {
  this.password = await this.generatePasswordHash();
});

userSchema.methods.generatePasswordHash = async function () {
  const saltRounds = 10;
  return await bcrypt.hash(this.password, saltRounds);
};
userSchema.methods.validatePassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

export default model<User>("User", userSchema);
