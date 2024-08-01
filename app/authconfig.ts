import { NextAuthConfig } from "next-auth";
import { NextResponse } from "next/server";

export const authConfig: NextAuthConfig = {
  providers: [],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.fullName;
        token.email = user.email;
        token.picture = user.img;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.image = token.picture as string | undefined;
        session.user.isAdmin = token.isAdmin as boolean;
      }
      return session;
    },
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
      const isOnUsersDashboard =
        request.nextUrl.pathname.startsWith("/dashboard/users");

      if (isOnDashboard) {
        if (isLoggedIn) {
          if (isOnUsersDashboard && !auth.user.isAdmin) {
            // Redirect non-admin users trying to access /dashboard/users
            return NextResponse.redirect(new URL("/dashboard", request.url));
          }
          return true;
        }
        return NextResponse.redirect(new URL("/login", request.url));
      } else if (isLoggedIn) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }
      return true;
    },
  },
};
