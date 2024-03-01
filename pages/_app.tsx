import "../styles/globals.css"; // Import global styles
import type { AppProps /*, AppContext */ } from "next/app";

function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default App;
