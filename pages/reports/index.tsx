import { PaymentTable } from "@/components/PaymentTable";
import { PendingPayment } from "@/components/PendingPayment";
import SideMenuLayout from "@/components/SideMenuLayout";
import WeekPaymentChart from "@/components/WeekPaymentChart";
import Head from "next/head";
import React from "react";

const Reports = () => {
    return (
        <SideMenuLayout page="Reports" branch="Chuka">
            <main className="w-full flex flex-col gap-10">
                <Head>
                    <title>EBS | Reports</title>
                </Head>
                <PaymentTable />
                <div className="flex flex-1 flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center lg:items-start gap-4 mt-10">
                    <WeekPaymentChart />
                    <PendingPayment />
                </div>
            </main>
        </SideMenuLayout>
    );
};

export default Reports;
