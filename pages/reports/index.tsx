import { PaymentTable } from "@/components/PaymentTable";
import { PendingPayment } from "@/components/PendingPayment";
import SideMenuLayout from "@/components/SideMenuLayout";
import { WeekPaymentTable } from "@/components/WeekPaymentTable";
import Head from "next/head";
import React from "react";

const Reports = () => {
    return (
        <SideMenuLayout page="Reports" branch="Chuka">
            <Head>
                <title>EBS | Reports</title>
            </Head>
            <PaymentTable />
            <div className="flex justify-between items-center gap-4">
                <WeekPaymentTable />
                <PendingPayment />
            </div>
        </SideMenuLayout>
    );
};

export default Reports;
