import LoginForm from "@/components/utils/LoginForm";
import Head from "next/head";

export default function LoginPage() {
    return (
        <main className="min-h-screen">
            <Head>
                <title>EBS | Login Page</title>
            </Head>
            <div className="flex flex-wrap">
                <div className="flex-1 h-screen flex flex-col justify-center items-center">
                    {/* Form */}
                    <LoginForm />
                    <div className="footer fixed bottom-5 hidden lg:block">
                        <p className="text-xs">
                            &copy; Deluxe Agency. All rights reserved. Made by
                            Deluxe!
                        </p>
                    </div>
                </div>
                <div
                    className="bg-primary flex-1 h-screen justify-center items-center hidden lg:flex"
                    style={{ borderBottomLeftRadius: "150px" }}
                >
                    {/* Vector image */}
                    <p
                        style={{
                            textTransform: "uppercase",
                        }}
                        className="text-6xl font-bold text-center text-slate-100"
                    >
                        Company
                    </p>
                </div>
            </div>
        </main>
    );
}
