"use client";

import { signIn } from "next-auth/react";

export function SignIn() {
  return (
    <button
      className="p-[8px]"
      onClick={async () => {
        await signIn("auth0");
      }}
    >
      Sign in
    </button>
  );
}
