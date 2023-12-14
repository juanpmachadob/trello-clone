"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerWithCredentials } from "@/actions";
import { Input } from "@/components/ui";

type FormInputs = {
  email: string;
  password: string;
};

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    if (!showPassword) {
      setShowPassword(true);
      return;
    }

    const { email, password } = data;
    await registerWithCredentials(email.toLowerCase(), password);
  });

  return (
    <form
      onSubmit={onSubmit}
      className="my-8 flex w-full flex-col gap-2"
      noValidate
    >
      <h1 className="mb-2 text-center font-semibold">Sign up to continue</h1>

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
          id="password"
          type="password"
          placeholder="Create a password"
          {...register("password", {
            required: true,
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
          error={errors.password}
        />
      )}

      <span role="" className="text-xs text-text-alternative">
        By continuing, you will create an account
      </span>

      <button
        type="submit"
        className="w-full rounded bg-primary p-2 font-semibold text-white outline-0 hover:brightness-90 active:brightness-50"
      >
        Sign up
      </button>
    </form>
  );
};
export default SignupForm;
