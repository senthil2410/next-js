import NextAuth, { NextAuthOptions, Session } from "next-auth"
import type { JWT } from "next-auth/jwt"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectDB } from "@/lib/mongoose"
import User from "@/lib/models/User"
import bcrypt from "bcryptjs"

export const authOptions:NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: 
      {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password")
        }

        await connectDB()
        const user = await User.findOne({ email: credentials.email })

        if (!user) 
        {
          throw new Error("No user found")
        }

        const isValid = await bcrypt.compare(credentials.password, user.password)

        if (!isValid) {
          throw new Error("Invalid password")
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge:0
  },
  jwt:{
    maxAge:0
  },
callbacks: {
    async jwt({ token, user }) {
    if (user) {
        token.id = user.id;
        token.role = (user as any).role
    }
    return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
    
    (session.user as any).id = token.sub ?? "";

    return session;
  }
},
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

