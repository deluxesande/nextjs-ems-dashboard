import SideMenu from "@/components/SideMenu";
import SideMenuItem from "@/components/utils/SideMenuItem";
import {
    BarChart2,
    Contact2,
    LayoutDashboard,
    Moon,
    ReceiptText,
    Search,
    User,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Input } from "../ui/input";

const SideMenuLayout: React.FC<{
    children: React.ReactNode;
    page: string;
    branch: string;
}> = ({ children, page, branch }) => {
    const router = useRouter();

    return (
        <div className="flex">
            <SideMenu>
                <SideMenuItem
                    icon={<LayoutDashboard size={20} />}
                    text="Dashboard"
                    active={page === "Dashboard"}
                    alert={page === "Dashboard"}
                    onClick={() => router.push("/")}
                />
                <SideMenuItem
                    icon={<BarChart2 size={20} />}
                    text="Reports"
                    active={page === "Reports"}
                    alert={page === "Reports"}
                    onClick={() => router.push("/reports")}
                />
                <SideMenuItem
                    icon={<User size={20} />}
                    text="Manage Users"
                    active={page === "Manage Users"}
                    alert={page === "Manage Users"}
                    onClick={() => router.push("/users")}
                />
                <SideMenuItem
                    icon={<ReceiptText size={20} />}
                    text="Generate Bill"
                    active={page === "Generate Bill"}
                    alert={page === "Generate Bill"}
                    onClick={() => router.push("/generate-bill")}
                />
                <SideMenuItem
                    icon={<Contact2 size={20} />}
                    text="Profile"
                    active={page === "Profile"}
                    alert={page === "Profile"}
                />
            </SideMenu>
            <div className="flex-1 flex-grow p-6 bg-slate-200 overflow-x-hidden">
                <div className="flex flex-wrap lg:flex-nowrap space-y-4 lg:justify-between">
                    <div className="w-full">
                        <p className="text-sm font-light">Pages / {page}</p>
                        <h1 className="text-primary font-semibold text-3xl my-1">
                            {page}
                        </h1>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-100 py-[1px] px-4 rounded-full">
                        <div className="relative">
                            <Search
                                color="#777"
                                size={15}
                                className="absolute left-3 top-[5px] transform translate-y-[5px]"
                            />
                            <Input
                                id="search"
                                className="rounded-full pl-10 w-full lg:w-72 appearance-none border-none outline-none bg-transparent"
                                placeholder="Search"
                                type="text"
                            />
                        </div>
                        <div className="flex gap-3 items-center">
                            <Moon size={15} />
                            <div className="relative w-8 h-8">
                                <Image
                                    src="https://randomuser.me/api/portraits/men/80.jpg"
                                    alt=""
                                    className="object-cover rounded-full shadow-lg"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-md font-medium text-green-500 mt-3 mb-4">
                    {branch} Branch
                </p>
                {children}
            </div>
        </div>
    );
};

export default SideMenuLayout;
