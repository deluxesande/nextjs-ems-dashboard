"use-client";
import Image from "next/image";
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import { createContext, useState } from "react";

export const SideMenuContext = createContext<any>(null);

const SideMenu = ({ children }: any) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <Image
                        src={"https://img.logoipsum.com/243.svg"}
                        className={`overflow-hidden transition-all ${
                            expanded ? "w-32" : "w-0"
                        }`}
                        alt="Logo"
                    ></Image>
                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className="p-1 5 rounded-lg bg-gray-50 hover:bg-gray-100"
                    >
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>

                <SideMenuContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SideMenuContext.Provider>

                <div className="border-t flex p-3">
                    <Image
                        src={"https://img.logoipsum.com/243.svg"}
                        alt=""
                        className="w-10 h-10 rounded-md"
                    ></Image>
                    <div
                        className={`
                        flex justify-between items-center
                        overflow-hidden transition-all ${
                            expanded ? "w-52 ml-3" : "w-0"
                        }
                    `}
                    >
                        <div className="leading-4">
                            <h4 className="font-semibold">John Doe</h4>
                            <span className="text-sm text-gray-600">
                                johndoe@gmail.com
                            </span>
                        </div>
                        <MoreVertical size={20} />
                    </div>
                </div>
            </nav>
        </aside>
    );
};

export default SideMenu;
