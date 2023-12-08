import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const credentialsProviderName = "login";

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "login",
      name: credentialsProviderName,
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        console.log({ credentials });
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
          try {
            const loginDetails = credentials as User;
            resolve(loginDetails);
          } catch (error) {
            reject(null);
          }
        });
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) {
        return `${baseUrl}${url}`;
      }
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) {
        return url;
      }
      return url;
    },
    async jwt({ token, user }) {
      console.log(token, user);
      if (user) {
        return { ...user };
      }
      return token;
    },
    async session({ session, token }) {
      console.log(token, session);
      if (session.user) {
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.image = token.image as string;
      }
      return session;
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
};
