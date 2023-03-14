import { FC } from "react";

import Head from "next/head";

import { Navbar } from "../Navbar";

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <section className="min-h-screen grid grid-rows-[3rem_auto]">
            <Head>
                <title>Home Page</title>
                <meta name="description" content="Home Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="flex justify-center items-center">
                { children }
            </main>
        </section>
    );
};
