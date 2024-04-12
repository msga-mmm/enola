"use client";

import { signOut, useSession } from "next-auth/react";

export function Something() {
  const { data: session } = useSession();

  return (
    <div>
      <p>WIP: {session?.user?.name}</p>

      <button
        onClick={async () => {
          await signOut();
        }}
      >
        logout
      </button>
    </div>
  );
}
