import LoginForm from "@/components/utils/LoginForm";

export default function Home() {
    return (
        <main className="min-h-screen">
            <div className="flex flex-wrap">
                <div className="flex-1 h-screen flex justify-center items-center">
                    {/* Form */}
                    <LoginForm />
                </div>
                <div
                    className="bg-primary flex-1 h-screen flex justify-center items-center"
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
