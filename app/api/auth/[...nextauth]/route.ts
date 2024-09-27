import NextAuth from "next-auth";
import type { JWT } from "next-auth/jwt";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
