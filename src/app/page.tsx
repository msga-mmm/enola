"use client";

import { SignIn } from "@/components/sign-in";
import { SignOut } from "@/components/sign-out";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>loading...</p>;
  }

  if (status === "unauthenticated") {
    return (
      <div>
        <SignIn />
      </div>
    );
  }

  return (
    <div>
      <p>{session?.user?.name}</p>

      <SignOut />
    </div>
  );
}
