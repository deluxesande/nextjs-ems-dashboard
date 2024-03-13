import MonthlyPayment from "@/components/MonthlyPayment";
import PaymentAnalysis from "@/components/PaymentAnalysis";
import SideMenuLayout from "@/components/SideMenuLayout";
import { DollarSign, UserRoundCheck, UsersRound } from "lucide-react";
import Head from "next/head";

export default function Home() {
    const stats = [
        {
            icon: UsersRound,
            name: "Users",
            number: 45,
        },
        {
            icon: DollarSign,
            name: "Total Payments",
            number: "Ksh 300,000",
        },
        {
            icon: UserRoundCheck,
            name: "Active Users",
            number: 22,
        },
    ];

    return (
        <SideMenuLayout page="Dashboard" branch="Chuka">
            <main className="w-full flex flex-col gap-10">
                <Head>
                    <title>EBS | Dashboard</title>
                </Head>
                <div className="flex gap-5">
                    {/* Icon stats */}
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="bg-slate-50 w-72 p-5 rounded-xl flex gap-4"
                            >
                                <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center">
                                    <Icon size={25} color="#6366F1" />
                                </div>
                                <div>
                                    <h4 className="text-md text-slate-400">
                                        {stat.name}
                                    </h4>
                                    <p className="font-bold text-lg">
                                        {stat.number}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="flex gap-6">
                    <MonthlyPayment />
                    <PaymentAnalysis />
                </div>
            </main>
        </SideMenuLayout>
    );
}
