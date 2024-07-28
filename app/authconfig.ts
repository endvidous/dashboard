import { NextAuthConfig } from "next-auth";
import { NextResponse } from "next/server";

export const authConfig: NextAuthConfig = {
  providers: [],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
      const isOnLoginPage = request.nextUrl.pathname === "/login";

      // Redirect logged-in users to dashboard if they're on the login page
      if (isLoggedIn && isOnLoginPage) {
        NextResponse.redirect(
          new URL("/dashboard", `${request.nextUrl.origin}`)
        );
      }

      // Allow access to dashboard only for logged-in users
      if (isOnDashboard) {
        return isLoggedIn;
      }

      // Allow access to all other pages
      return true;
    },
  },
};
