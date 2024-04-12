import { SignIn } from "@/components/sign-in";
import { SignOut } from "@/components/sign-out";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignIn />

      <SignOut />
    </main>
  );
}
