"use client";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
      <ToastContainer />
    </>
  );
};
