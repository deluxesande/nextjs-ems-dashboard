import SideMenuLayout from "@/components/SideMenuLayout";
import Head from "next/head";
import React from "react";

export default function Home() {
    return (
        <SideMenuLayout>
            <main className="min-h-screen">
                <Head>
                    <title>EBS | Dashboard</title>
                </Head>
                Home page
            </main>
        </SideMenuLayout>
    );
}
