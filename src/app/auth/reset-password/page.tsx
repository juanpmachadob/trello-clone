import ResetPasswordForm from "@/components/auth/reset-password/ResetPasswordForm";
import Link from "next/link";

export default function ResetPasswordPage() {
  return (
    <section className="w-full">
      <ResetPasswordForm />

      <span className="flex justify-center gap-2 text-sm">
        <Link href="/auth/login" className="text-primary hover:underline">
          Return to log in
        </Link>
      </span>
    </section>
  );
}
