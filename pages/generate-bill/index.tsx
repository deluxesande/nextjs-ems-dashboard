import SideMenu from "@/components/SideMenu";
import SideMenuItem from "@/components/utils/SideMenuItem";
import { BarChart3, LayoutDashboard, Receipt, UserCircle } from "lucide-react";
import React from "react";

const GenerateBill = () => {
    return (
        <>
            <SideMenu>
                <SideMenuItem
                    icon={<LayoutDashboard size={20} />}
                    text="Dashboard"
                    alert
                />
                <SideMenuItem
                    icon={<BarChart3 size={20} />}
                    text="Statistics"
                    active
                />
                <SideMenuItem icon={<UserCircle size={20} />} text="Users" />
                <SideMenuItem icon={<Receipt size={20} />} text="Billings" />
            </SideMenu>
        </>
    );
};

export default GenerateBill;
