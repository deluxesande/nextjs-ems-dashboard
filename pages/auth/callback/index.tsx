import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Callback() {
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const { hash } = window.location;
            const params = new URLSearchParams(hash.substring(1));
            const accessToken = params.get("access_token");
            const refreshToken = params.get("refresh_token");
            const expiresIn = params.get("expires_in");

            // TODO - Figure out how to set next sessions
            // maybe make a call to the backend and have them set the sessions
        }
    }, [router]);

    return <div>Authenticating...</div>;
}
