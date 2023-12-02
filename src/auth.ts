import NextAuth, { type NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/signup",
  },

  providers: [GoogleProvider, GithubProvider],
};

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);
