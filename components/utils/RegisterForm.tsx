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

export default function RegisterForm() {
    const router = useRouter();

    const signUp = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        const { error } = await supabase.auth.signUp({
            email: email as string,
            password: password as string,
        });

        if (error) {
            return router.push("/register");
        }
        return router.push("/login");
    };

    return (
        <Card className="mx-auto min-w-[400px]">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-primary">
                    Branch Sign Up
                </CardTitle>
                <CardDescription>
                    Enter your details to create an account
                </CardDescription>
                <hr></hr>
            </CardHeader>
            <CardContent>
                <form className="space-y-4" onSubmit={signUp}>
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
                        <Label htmlFor="email" className="text-primary">
                            Phone*
                        </Label>
                        <Input
                            id="phone"
                            name="phone"
                            placeholder="0712345678"
                            required
                            type="number"
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
                    <div className="space-y-2">
                        <Label
                            htmlFor="confirmPassword"
                            className="text-primary"
                        >
                            Confirm Password*
                        </Label>
                        <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Min 8 characters"
                            required
                            type="password"
                        />
                    </div>
                    <Button className="w-full space-y-4" type="submit">
                        Sign Up
                    </Button>
                    <div className="flex justify-start">
                        <p>
                            Already have an account?
                            <Link href="/login" className="text-blue-500 ml-2">
                                Log in
                            </Link>
                        </p>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
