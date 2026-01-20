import { jwtClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/svelte";
export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
  plugins: [jwtClient()],
});

async function main() {
  const { data, error } = await authClient.signUp.email(
    {
      email: "email", // user email address
      password: "password", // user password -> min 8 characters by default
      name: "Alessandro", // user display name
    },
    {
      onRequest: (ctx) => {
        //show loading
      },
      onSuccess: (ctx) => {
        //redirect to the dashboard or sign in page
        console.log("User created successfully");
      },
      onError: (ctx) => {
        // display the error message
        console.error(ctx.error.message);
      },
    },
  );
}

main();
