import Head from "next/head";
import { Navbar } from "../Navbar";

export const MainLayout = ({ children }) => {
    return (<>
        <Head>
            <title>Home Page</title>
            <meta name="description" content="Home Page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <main>
            { children }
        </main>
    </>);
};
