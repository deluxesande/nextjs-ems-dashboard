import React from "react";

import { BarChart2, CheckCircle } from "lucide-react";
import MonthLineChart from "@/components/MonthLineChart";

export default function MonthlyPayment() {
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
            <div className="flex justify-between items-center gap-4">
                <div className="w-1/4 flex flex-col justify-center items-center">
                    <div>
                        <h1 className="text-black font-semibold text-2xl my-1">
                            Ksh 200, 000
                        </h1>
                        <p className="text-slate-400 font-semibold text-md">
                            Total Payments
                        </p>
                        <div className="flex items-center gap-2 mt-6">
                            <CheckCircle size={15} color="lightgreen" />
                            <p className="text-green-400 font-bold text-xs">
                                On track with this area
                            </p>
                        </div>
                    </div>
                </div>
                <MonthLineChart />
            </div>
        </div>
    );
}
