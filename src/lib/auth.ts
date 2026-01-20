import { betterAuth, BetterAuthOptions, Auth } from "better-auth";
import { jwt } from "better-auth/plugins";
import { Pool } from "pg";

export const auth: Auth<BetterAuthOptions> = betterAuth({
  database: new Pool({
    connectionString: process.env.DB_CONNECTION_STRING,
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [jwt()],
  //...
});
