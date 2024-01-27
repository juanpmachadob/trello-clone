"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginWithCredentials } from "@/actions";
import { Button, ErrorAlert, Input } from "@/components/ui";

type FormInputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = handleSubmit(async (data) => {
    if (!showPassword) {
      setShowPassword(true);
      return;
    }

    if (error) setError("");
    const { email, password } = data;

    if (searchParams.has("error")) {
      router.replace("/auth/login");
    }

    const res = await loginWithCredentials(email.toLowerCase(), password);
    if (!res.ok && "error" in res) {
      setError(res.error);
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      className="my-8 flex w-full flex-col gap-2"
      noValidate
    >
      <h1 className="mb-2 text-center font-semibold">Log in to continue</h1>

      <ErrorAlert error={error} />

      <Input
        autoFocus={true}
        id="email"
        type="email"
        placeholder="Enter your email"
        {...register("email", {
          required: "Please enter and email address",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Email must be valid",
          },
        })}
        error={errors.email}
      />

      {showPassword && (
        <Input
          autoFocus={true}
          id="password"
          type="password"
          placeholder="Enter password"
          {...register("password", {
            required: "Please enter your password",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
          error={errors.password}
        />
      )}
      <Button type="submit">Continue</Button>
    </form>
  );
};
export default LoginForm;
