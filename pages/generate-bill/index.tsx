"use client";
import SideMenu from "@/components/SideMenu";
import SideMenuItem from "@/components/utils/SideMenuItem";
import {
    BarChart3,
    LayoutDashboard,
    Receipt,
    User,
    UserCircle,
} from "lucide-react";

const GenerateBill = () => {
    return (
        <>
            <SideMenu>
                <SideMenuItem
                    icon={<LayoutDashboard size={20} />}
                    text="Dashboard"
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
        </>
    );
};

export default GenerateBill;
