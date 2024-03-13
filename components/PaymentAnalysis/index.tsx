import React from "react";
import { ChevronDown } from "lucide-react";
import PaymentAnalysisPieChart from "../PaymentAnalysisPieChart";

export default function PaymentAnalysis() {
    return (
        <div className="w-1/4 p-6 bg-slate-50 shadow rounded-md flex-1">
            <div className="flex justify-between items-center">
                <h1 className="text-primary font-semibold text-xl my-1">
                    Payment Analysis
                </h1>
                <ChevronDown
                    className="text-primary w-8 h-8 p-2 cursor-pointer rounded-full bg-indigo-50"
                    size={20}
                />
            </div>
            <div className="flex justify-center items-center">
                <PaymentAnalysisPieChart />
            </div>
        </div>
    );
}
