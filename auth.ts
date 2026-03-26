import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      // store user id in token
      if (user) {
        token.id = user.id;
      }

      // store github access token
      if (account) {
        token.accessToken = account.access_token;
      }

      return token;
    },

    async session({ session, token }) {
      // attach id to session user
      if (token?.id && session.user) {
        session.user.id = token.id as string;
      }

      return session;
    },
  },
});
