"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginWithCredentials } from "@/actions";
import { Button, Input } from "@/components/ui";

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
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    if (!showPassword) {
      setShowPassword(true);
      return;
    }

    const { email, password } = data;
    await loginWithCredentials(email.toLowerCase(), password);
  });

  return (
    <form
      onSubmit={onSubmit}
      className="my-8 flex w-full flex-col gap-2"
      noValidate
    >
      <h1 className="mb-2 text-center font-semibold">Log in to continue</h1>

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
          placeholder="Enter password"
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
      <Button type="submit">Continue</Button>
    </form>
  );
};
export default LoginForm;
