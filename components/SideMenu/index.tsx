"use-client";
import { SideMenuContext } from "@/context/SideMenuProvider";
import { Building2, LogOut } from "lucide-react";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

const SideMenu = ({ children }: any) => {
    const { expanded, setExpanded } = useContext(SideMenuContext);

    const router = useRouter();

    useEffect(() => {
        const checkScreenSizeAndSetExpand = () => {
            const screenWidthThreshold = 768; // Example for tablets and larger screens
            if (window.innerWidth > screenWidthThreshold) {
                setExpanded(true);
            } else {
                setExpanded(false);
            }
        };

        // Check and set on component mount
        checkScreenSizeAndSetExpand();

        // Set up the event listener for screen resize
        window.addEventListener("resize", checkScreenSizeAndSetExpand);

        // Clean up the event listener
        return () => {
            window.removeEventListener("resize", checkScreenSizeAndSetExpand);
        };
    });

    const toggleExpand = () => {
        // Define the screen width threshold for toggling expand
        const screenWidthThreshold = 768; // Example for tablets and larger screens

        if (window.innerWidth > screenWidthThreshold) {
            setExpanded(!expanded);
        } else {
            // Optionally handle the case for smaller screens
            setExpanded(false);
        }
    };
    return (
        <aside
            className={`h-screen py-4 w-20 ${
                expanded ? "lg:w-60" : "w-20"
            } sticky top-0`}
        >
            <nav className="h-full flex flex-col bg-white shadow-sm">
                <div
                    className="p-4 pb-2 flex justify-center items-center cursor-pointer"
                    onClick={toggleExpand}
                >
                    {!expanded ? (
                        // Display this when the view is not expanded
                        <Building2
                            size={24}
                            className="mb-14 text-primary"
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
