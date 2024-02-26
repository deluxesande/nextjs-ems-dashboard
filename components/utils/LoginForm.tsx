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

export default function LoginForm() {
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
                <div className="space-y-4">
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
                </div>
            </CardContent>
        </Card>
    );
}
