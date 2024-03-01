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
                />
                <SideMenuItem icon={<User size={20} />} text="Profile" />
            </SideMenu>
            <div className="flex-grow">{children}</div>
        </div>
    );
};

export default SideMenuLayout;
