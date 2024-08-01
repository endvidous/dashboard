import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDb } from "../lib/utils";
import { User } from "../lib/models";
import argon2 from "argon2";
import { ValidationError } from "@/lib/errors";

declare module "next-auth" {
  interface User {
    fullName: string;
    img?: string | null;
    isAdmin: boolean;
  }

  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image?: string | null;
      isAdmin: boolean;
    };
  }
}

type CredentialType = { email: string; password: string };

const login = async (credentials: CredentialType) => {
  console.log("Entered login function");
  try {
    connectToDb();
    const user = await User.findOne({ email: credentials.email });

    if (!user) throw new ValidationError("Email doesn't exist on the server");

    const isPasswordCorrect = await argon2.verify(
      user.password,
      credentials.password
    );

    if (!isPasswordCorrect) throw new ValidationError("Password is wrong");

    return user;
  } catch (error: any) {
    throw error;
  }
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials: any) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error: any) {
          if (error instanceof ValidationError) {
            throw new ValidationError(error.message);
          }
          throw error;
        }
      },
    }),
  ],
});
