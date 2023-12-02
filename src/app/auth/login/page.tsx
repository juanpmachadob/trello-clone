import Link from "next/link";
import { LoginForm, ThirdPartyAuthForm } from "@/components/auth";

export default function LoginPage() {
  return (
    <section className="w-full">
      <LoginForm />

      <ThirdPartyAuthForm />

      <div className="my-2 flex w-full flex-col gap-2"></div>
      <span className="flex justify-center gap-2 text-sm">
        <Link
          href="/auth/reset-password"
          className="text-primary hover:underline"
        >
          Can&apos;t log in?
        </Link>
        <span>•</span>
        <Link href="/auth/signup" className="text-primary hover:underline">
          Create an account
        </Link>
      </span>
    </section>
  );
}
