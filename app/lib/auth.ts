import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import db from "./db";
import { compare } from "bcryptjs";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "sign-in",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error("Please provide both username and password.");
        }

        const existingUser = await db.employee.findUnique({
          where: { username: credentials?.username },
        });

        if (!existingUser) {
          throw new Error("Username not found.");
        }

        const passwordMatch = await compare(
          credentials?.password,
          existingUser.password
        );
        if (!passwordMatch) {
          throw new Error("Incorrect password.");
        }

        return {
          id: `${existingUser.id}`,
          username: existingUser.username,
          email: existingUser.email
        };
      },
    }),
  ],
  callbacks: {
    async jwt({token, user}) {
      if(user) {
        return {
          ...token,
          username: user.username,
        }
      }
      return token
    },
    async session({session, token}) {
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username
        } 
      }
    }
  }
};
