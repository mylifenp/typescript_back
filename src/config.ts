export const HOST = process.env.HOST || "http://localhost";
export const PORT =
  (process.env.PORT && parseInt(process.env.PORT, 10)) || 8080;
export const ENV = process.env.NODE_ENV || "DEVELOPMENT";
export const DATABASE_URL = process.env.DATABASE_URL || "";
export const DATABASE_USERNAME = process.env.DATABASE_USERNAME || "";
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || "";
export const SECRET =
  process.env.SECRET || "dsfjoijl4,qmdflaskmfasdfo4352345vlamlskdfa345)=?2fdsa";

export const TOKEN_EXPIRES_IN = process.env.TOKEN_EXPIRES_IN || 3600;
