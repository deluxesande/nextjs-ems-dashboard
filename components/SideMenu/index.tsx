"use-client";
import Image from "next/image";
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import { createContext, useState } from "react";

export const SideMenuContext = createContext<any>(null);

const SideMenu = ({ children }: any) => {
    const [expanded, setExpanded] = useState<boolean>(true);

    return (
        <aside className="h-screen py-4 w-[350px]">
            <nav className="h-full flex flex-col bg-white shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <h1
                        // Change mb-4 to match the bread crumbs
                        className="text-2xl font-bold text-secondary-500 mb-4"
                        style={{
                            textTransform: "uppercase",
                        }}
                    >
                        Company
                    </h1>
                </div>

                <SideMenuContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SideMenuContext.Provider>

                <div className="flex justify-center items-center p-3 text-center w-full">
                    <button className="bg-primary text-slate-200 px-14 py-2 rounded-md">
                        Log Out
                    </button>
                </div>
            </nav>
        </aside>
    );
};

export default SideMenu;
