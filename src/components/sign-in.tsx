import { signIn } from "@/auth";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("auth0");
      }}
    >
      <button type="submit">Signin with Auth0</button>
    </form>
  );
}
