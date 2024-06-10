import { createContext, useState } from "react";

export const SideMenuContext = createContext<any>(null);

export const SideMenuProvider = ({ children }: any) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const value = { expanded, setExpanded };

    return (
        <SideMenuContext.Provider value={value}>
            {children}
        </SideMenuContext.Provider>
    );
};
