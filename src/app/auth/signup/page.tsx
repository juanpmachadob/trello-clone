import SignupForm from "@/components/auth/signup/SignupForm";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <section className="w-full">
      <SignupForm />

      <p className="text-center text-sm font-semibold text-text-alternative">
        Or continue with:
      </p>
      <div className="my-2 flex w-full flex-col gap-2"></div>
      <span className="flex justify-center gap-2 text-sm">
        <Link href="/auth/login" className="text-primary hover:underline">
          Already have an account?
        </Link>
      </span>
    </section>
  );
}
