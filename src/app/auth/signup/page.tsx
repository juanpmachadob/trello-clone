import { Metadata } from "next";
import Link from "next/link";
import { SignupForm, ThirdPartyAuthForm } from "@/components/auth";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function SignUpPage() {
  return (
    <section className="w-full">
      <SignupForm />

      <ThirdPartyAuthForm />

      <div className="my-2 flex w-full flex-col gap-2"></div>
      <span className="flex justify-center gap-2 text-sm">
        <Link href="/auth/login" className="text-primary hover:underline">
          Already have an account?
        </Link>
      </span>
    </section>
  );
}
