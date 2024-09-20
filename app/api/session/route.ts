import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const session: Session | null = await getServerSession(authOptions);
        console.log('Session:', session);

        const response = NextResponse.json({ session });
        response.headers.set('Cache-Control', 'no-store');
        return response;
    } catch (error) {
        console.error('Error fetching session:', error);
        const response = NextResponse.json({ session: null });
        response.headers.set('Cache-Control', 'no-store');
        return response;
    }

}


  
