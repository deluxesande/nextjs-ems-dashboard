import {
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/router";

import supabase from "@/utils/supabase/server";
import Link from "next/link";

export default function LoginForm() {
    const router = useRouter();

    const signIn = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        // Make a call to your backend
        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.status === 200) {
            // Redirect to the home page
            return router.push("/");
        }
    };

    const signWithGoogle = async (event: React.MouseEvent) => {
        event.preventDefault();

        const {
            data: user,
            data: session,
            error,
        } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: "http://localhost:3000/auth/callback",
            },
        });

        if (error) {
            console.error(error.message);
            return;
        }
    };

    return (
        <Card className="mx-auto min-w-[400px]">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-primary">
                    Branch Login
                </CardTitle>
                <CardDescription>
                    Enter your email and password to login
                </CardDescription>
                <hr></hr>
            </CardHeader>
            <CardContent>
                <form className="space-y-4" onSubmit={signIn}>
                    <div className="space-y-4">
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select your Branch" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Branches</SelectLabel>
                                    <SelectItem value="nakuru">
                                        Nakuru
                                    </SelectItem>
                                    <SelectItem value="chuka">Chuka</SelectItem>
                                    <SelectItem value="nairobi">
                                        Nairobi
                                    </SelectItem>
                                    <SelectItem value="mombasa">
                                        Mombasa
                                    </SelectItem>
                                    <SelectItem value="meru">Meru</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-primary">
                            Email*
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="m@example.com"
                            required
                            type="email"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password" className="text-primary">
                            Password*
                        </Label>
                        <Input
                            id="password"
                            name="password"
                            placeholder="Min 8 characters"
                            required
                            type="password"
                        />
                    </div>
                    <div className="flex justify-end">
                        <a href="#" className="text-blue-500 text-sm">
                            Forgot Password?
                        </a>
                    </div>
                    <div className="flex justify-start gap-2">
                        <input
                            type="checkbox"
                            style={{ transform: "scale(1.2)" }}
                        />
                        <p className="text-base">Keep me Logged in</p>
                    </div>
                    <Button className="w-full space-y-4" type="submit">
                        Login
                    </Button>
                    <Button
                        className="w-full space-y-4"
                        type="button"
                        onClick={signWithGoogle}
                    >
                        Login In With Google
                    </Button>
                    <div className="flex justify-start">
                        <p>
                            Already have an account?
                            <Link
                                href="/register"
                                className="text-blue-500 ml-2"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
