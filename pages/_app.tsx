import "../styles/globals.css"; // Import global styles
import type { AppProps /*, AppContext */ } from "next/app";
import { SideMenuProvider } from "@/context/SideMenuProvider";

function App({ Component, pageProps }: AppProps) {
    return (
        <SideMenuProvider>
            <Component {...pageProps} />
        </SideMenuProvider>
    );
}

export default App;
