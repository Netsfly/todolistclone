import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import GitHubProvider from 'next-auth/providers/github'
import Discord from "next-auth/providers/discord";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub,Google,Discord],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    },
  },
});
