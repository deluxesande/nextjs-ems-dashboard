import { PaymentTable } from "@/components/PaymentTable";
import { PendingPayment } from "@/components/PendingPayment";
import SideMenuLayout from "@/components/SideMenuLayout";
import WeekPaymentChart from "@/components/WeekPaymentChart";
import Head from "next/head";
import React from "react";

const Reports = () => {
    return (
        <SideMenuLayout page="Reports" branch="Chuka">
            <Head>
                <title>EBS | Reports</title>
            </Head>
            <PaymentTable />
            <div className="flex justify-between items-start gap-4 mt-10">
                <WeekPaymentChart />
                <PendingPayment />
            </div>
        </SideMenuLayout>
    );
};

export default Reports;
