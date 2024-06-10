"use client";
import { useContext } from "react";
import { SideMenuContext } from "@/context/SideMenuProvider";

const SideMenuItem: React.FC<{
    icon: React.ReactNode;
    text: string;
    alert?: boolean;
    active?: boolean;
    onClick?: () => void;
}> = ({ icon, text, alert, active, onClick }) => {
    const { expanded } = useContext(SideMenuContext);
    return (
        <li
            className={`
                relative flex justify-center items-center py-2 px-3 my-2
                font-medium rounded-md cursor-pointer
                transition-colors group
                ${
                    active
                        ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 "
                        : "hover:bg-indigo-50 text-gray-600"
                }
            `}
            onClick={onClick}
        >
            {icon}
            <span
                className={`flex justify-between items-center
                        overflow-hidden transition-all ${
                            expanded ? "lg:w-52 ml-3" : "w-0"
                        } `}
            >
                {text}
            </span>
            {alert && expanded && (
                <div
                    className={`absolute right-2 w-2 h-2 rounded bg-indigo-400`}
                ></div>
            )}

            {!expanded && (
                <div
                    className={`absolute left-full rounded-md px-2 py-1 ml-6 w-20
                bg-indigo-100 text-indigo-800 text-sm
                invisible opacity-20 translate-x-3 transition-all
                group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                >
                    {text}
                </div>
            )}
        </li>
    );
};

export default SideMenuItem;
