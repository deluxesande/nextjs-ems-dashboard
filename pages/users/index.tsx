import SideMenuLayout from "@/components/SideMenuLayout";
import { Input } from "@/components/ui/input";
import Head from "next/head";

import { MapPin, Phone, Mail, EyeOff } from "lucide-react";

const GenerateBill = () => {
    return (
        <SideMenuLayout page="Manage Users" branch="Chuka">
            <Head>
                <title>EBS | Add User</title>
            </Head>
            <div
                className="bg-slate-50 p-5 mt-14 rounded-xl"
                style={{ width: "calc(100vw - 440px)" }}
            >
                <h1 className="text-primary font-semibold text-md my-1">
                    Add User
                </h1>
                <div className="mt-4">
                    <label htmlFor="scno" className="text-md">
                        SCNO
                    </label>
                    <Input
                        id="scno"
                        type="text"
                        className="rounded-md w-full mt-2"
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="name" className="text-md">
                        Full Name
                    </label>
                    <Input
                        id="name"
                        type="text"
                        className="rounded-md w-full mt-2"
                    />
                </div>
                <div className="flex w-full gap-8">
                    <div className="mt-4 flex-1">
                        <label htmlFor="address" className="text-md">
                            Address
                        </label>
                        <div className="relative">
                            <Input
                                id="address"
                                type="text"
                                className="rounded-md w-full mt-2"
                            />
                            <MapPin
                                color="#777"
                                size={15}
                                className="absolute right-3 top-[5px] transform translate-y-[5px]"
                            />
                        </div>
                    </div>
                    <div className="mt-4 flex-1">
                        <label htmlFor="phone" className="text-md">
                            Phone No.
                        </label>
                        <div className="relative">
                            <Input
                                id="phone"
                                type="text"
                                className="rounded-md w-full mt-2"
                            />
                            <Phone
                                color="#777"
                                size={15}
                                className="absolute right-3 top-[5px] transform translate-y-[5px]"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <label htmlFor="email" className="text-md">
                        Email
                    </label>
                    <div className="relative">
                        <Input
                            id="email"
                            type="email"
                            className="rounded-md w-full mt-2"
                        />
                        <Mail
                            color="#777"
                            size={15}
                            className="absolute right-3 top-[5px] transform translate-y-[5px]"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <label htmlFor="password" className="text-md">
                        Password
                    </label>
                    <div className="relative">
                        <Input
                            id="password"
                            type="password"
                            className="rounded-md w-full mt-2"
                        />
                        <EyeOff
                            color="#777"
                            size={15}
                            className="absolute right-3 top-[5px] transform translate-y-[5px]"
                        />
                    </div>
                </div>
                <button className="bg-primary text-slate-200 px-14 py-2 w-full rounded-md mt-8">
                    Add
                </button>
            </div>
        </SideMenuLayout>
    );
};

export default GenerateBill;
