import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {authOptions} from "@/app/api/auth/authOptions";

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }