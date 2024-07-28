import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDb } from "../lib/utils";
import { User } from "../lib/models";
import argon2 from "argon2";

type CredentialType = { email: string; password: string };

const login = async (credentials: CredentialType) => {
  try {
    connectToDb();
    const user = await User.findOne({ email: credentials.email });

    if (!user) throw new Error("Email doesn't exist, Please Sign Up");

    const isPasswordCorrect = await argon2.verify(
      user.password,
      credentials.password
    );

    if (!isPasswordCorrect)
      throw new Error("Wrong password entered please try again");

    return user;
  } catch (error: any) {
    console.log(error);
    throw new Error("Failed to login!");
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
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
        token.email = user.email as string;
        token.img = user.image as string | null | undefined;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.image = token.img as string | null | "";
      }
      return session;
    },
  },
});
