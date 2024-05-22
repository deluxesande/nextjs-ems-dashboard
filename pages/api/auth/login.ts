import { withIronSession, Session } from "next-iron-session";
import { createClient } from "@supabase/supabase-js";
import type { NextApiRequest, NextApiResponse } from "next";

interface NextApiRequestWithIronSession extends NextApiRequest {
    session: Session;
}

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const handler = async (
    req: NextApiRequestWithIronSession,
    res: NextApiResponse
) => {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    // Extract the credentials from the request body
    const { email, password } = req.body;

    const {
        data: user,
        data: session,
        error,
    } = await supabase.auth.signInWithPassword({
        email: email as string,
        password: password as string,
    });

    if (error) {
        return res.status(400).json({ error: error.message });
    }

    req.session.set("user", {
        id: user.user.id,
        email: user.user.email,
        role: user.user.role,
    });
    req.session.set("session", {
        access_token: session.session.access_token,
        refresh_token: session.session.refresh_token,
        expires_in: session.session.expires_in,
    });
    await req.session.save();

    res.status(200);
};

const secret = process.env.SECRET_COOKIE_PASSWORD;
if (!secret) {
    throw new Error("SECRET_COOKIE_PASSWORD environment variable is not set");
}

export default withIronSession(handler, {
    password: secret,
    cookieName: "EBS Sessions",
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
});
