"use client";
import { useForm } from "react-hook-form";
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

  const onSubmit = handleSubmit((data) => {});

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
      <span role="" className="text-xs text-text-alternative">
        By continuing, you will receive an email to create your account
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
