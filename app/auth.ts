import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDb } from "../lib/utils";
import { User } from "../lib/models";
import argon2 from "argon2";

// Extend the User type
declare module "next-auth" {
  interface User {
    fullName: string;
    img?: string | null;
    isAdmin?: boolean;
  }

  interface Session {
    user: {
      id: string;
      fullName: string;
      email: string;
      image?: string | null;
      isAdmin: boolean;
    };
  }

  interface JWT {
    id: string;
    email: string;
    img?: string | null;
    isAdmin: boolean;
  }
}

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
          console.log("User: ", user);
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
        token.id = user.id;
        token.name = user.fullName;
        token.email = user.email;
        token.image = user.img;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.image = token.image as string;
        session.user.isAdmin = token.isAdmin as boolean;
      }
      return session;
    },
  },
});
