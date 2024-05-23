import { useEffect } from "react";
import { useRouter } from "next/router";
import supabase from "@/utils/supabase/server";

export default function Callback() {
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const { hash } = window.location;
            const params = new URLSearchParams(hash.substring(1));
            const accessToken = params.get("access_token");
            const refreshToken = params.get("refresh_token");
            const expiresIn = params.get("expires_in");

            // Now you can use these values to authenticate the user in your application.
            // For example, you could store them in local storage or send them to your server.
            console.log(accessToken, refreshToken, expiresIn);

            // After you're done, you can redirect the user to another page.
            // router.push('/');
        }

        const { code } = router.query;

        if (code) {
            supabase.auth
                .exchangeCodeForSession(code as string)
                .then(() => {
                    router.push("/");
                })
                .catch((error) => {
                    console.error(error);
                    router.push("/login");
                });
        }
    }, [router]);

    return <div>Authenticating...</div>;
}
