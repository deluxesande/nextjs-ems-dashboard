import React from "react";
import SideMenu from "@/components/SideMenu";
import SideMenuItem from "@/components/utils/SideMenuItem";
import {
    LayoutDashboard,
    BarChart3,
    UserCircle,
    Receipt,
    User,
} from "lucide-react";
import { useRouter } from "next/router";

const SideMenuLayout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const router = useRouter();

    return (
        <div className="flex">
            <SideMenu>
                <SideMenuItem
                    icon={<LayoutDashboard size={20} />}
                    text="Dashboard"
                    onClick={() => router.push("/")}
                />
                <SideMenuItem
                    icon={<BarChart3 size={20} />}
                    text="Reports"
                    active
                    alert
                />
                <SideMenuItem
                    icon={<UserCircle size={20} />}
                    text="Manage Users"
                />
                <SideMenuItem
                    icon={<Receipt size={20} />}
                    text="Generate Bill"
                    onClick={() => router.push("/generate-bill")}
                />
                <SideMenuItem icon={<User size={20} />} text="Profile" />
            </SideMenu>
            <div className="flex-grow p-6 bg-slate-200">
                <div className="mb-4">
                    <p className="text-sm font-light">Pages / Dashboard</p>
                    <h1 className="text-primary font-semibold text-3xl my-1">
                        Main Dashboard
                    </h1>
                    <p className="text-md font-medium text-green-500 mt-3">
                        Chuka Branch
                    </p>
                </div>
                {children}
            </div>
        </div>
    );
};

export default SideMenuLayout;
