import React from "react";
import { BarChart2 } from "lucide-react";
import { RecentPaymentTable } from "../RecentPaymentTable";

export default function RecentPayments() {
    return (
        <div className="w-3/4 p-6 bg-slate-50 shadow rounded-md flex-1">
            <div className="flex justify-between items-center">
                <h1 className="text-primary font-semibold text-xl my-1">
                    Monthly Payments
                </h1>
                <BarChart2
                    className="text-primary w-8 h-8 p-2 cursor-pointer rounded-full bg-indigo-50"
                    size={20}
                />
            </div>
            <RecentPaymentTable />
        </div>
    );
}
