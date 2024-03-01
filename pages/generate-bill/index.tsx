"use client";
import SideMenuLayout from "@/components/SideMenuLayout";
import Head from "next/head";

const GenerateBill = () => {
    return (
        <SideMenuLayout page="Generate Bill" branch="Chuka">
            <Head>
                <title>EBS | Generate Bill</title>
            </Head>
            <div className="bg-red-500 h-[200px] w-[300px]"></div>
        </SideMenuLayout>
    );
};

export default GenerateBill;
