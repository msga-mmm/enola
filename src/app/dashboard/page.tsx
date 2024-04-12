"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const { status } = useSession();

  if (status === "loading") {
    return <p>loading...</p>;
  }

  if (status === "unauthenticated") {
    redirect("/");
  }

  return (
    <div>
      dashboard <Link href="/">home</Link>
    </div>
  );
}
