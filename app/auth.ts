import NextAuth, { DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDb } from "../lib/utils";
import { User } from "../lib/models";
import argon2 from "argon2";
import { error } from "console";

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
      name: string;
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

    if (!user) throw new Error("Email doesn't exist on the server");

    const isPasswordCorrect = await argon2.verify(
      user.password,
      credentials.password
    );

    if (!isPasswordCorrect) throw new Error("Password is wrong");

    return user;
  } catch (error: any) {
    throw new Error(error.message);
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
          throw new Error(error.message);
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
