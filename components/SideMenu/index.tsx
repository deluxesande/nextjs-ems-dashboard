"use-client";
import { useRouter } from "next/router";
import { createContext, useContext } from "react";
import { Award, LogOut } from "lucide-react";
import { SideMenuContext } from "@/context/SideMenuProvider";

const SideMenu = ({ children }: any) => {
    const { expanded, setExpanded } = useContext(SideMenuContext);

    const router = useRouter();

    return (
        <aside
            className={`h-screen py-4 ${
                expanded ? "lg:w-60" : "w-20"
            } sticky top-0`}
        >
            <nav className="h-full flex flex-col bg-white shadow-sm">
                <div
                    className="p-4 pb-2 flex justify-center items-center cursor-pointer"
                    onClick={() => setExpanded(!expanded)}
                >
                    {!expanded ? (
                        // Display this when the view is not expanded
                        <Award
                            size={24}
                            className="mb-14"
                            color="currentColor"
                        />
                    ) : (
                        // Display this when the view is expanded
                        <h1
                            className="text-2xl font-bold text-secondary-500 mb-14"
                            style={{
                                textTransform: "uppercase",
                            }}
                        >
                            Company
                        </h1>
                    )}
                </div>

                <SideMenuContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SideMenuContext.Provider>

                <div className="flex justify-center items-center p-3 text-center w-full">
                    <button
                        className={`${
                            expanded
                                ? "bg-primary text-slate-200 px-14 py-2 rounded-md flex gap-4 items-center"
                                : ""
                        }`}
                        onClick={() => router.push("/login")}
                    >
                        {expanded ? (
                            <>
                                Log Out <LogOut color="white" size={20} />
                            </>
                        ) : (
                            <LogOut className="text-primary" size={20} />
                        )}
                    </button>
                </div>
            </nav>
        </aside>
    );
};

export default SideMenu;
