import React, { useEffect, useRef } from "react";
import { BarChart2 } from "lucide-react";
import Chart from "chart.js/auto";
import colors from "@/styles/colors/colors";

export default function WeekPaymentChart() {
    const chartRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const myChartRef = chartRef.current?.getContext("2d");

        if (myChartRef) {
            new Chart(myChartRef, {
                type: "bar",
                data: {
                    labels: ["17", "18", "19", "20", "21", "22", "23"],
                    datasets: [
                        {
                            label: "Payments",
                            data: [12, 19, 3, 5, 2, 3, 7], // replace this with your data
                            backgroundColor: colors.primary,
                            barThickness: 16,
                            borderRadius: 30,
                        },
                        {
                            label: "Payments",
                            data: [12, 19, 3, 5, 2, 3, 7], // replace this with your data
                            backgroundColor: colors.tertiary,
                            barThickness: 16,
                            borderRadius: 30,
                        },
                        {
                            label: "More Payments",
                            data: [5, 10, 4, 8, 3, 6, 9], // replace this with your data
                            backgroundColor: colors.secondary,
                            barThickness: 16,
                            borderRadius: 30,
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            display: true,
                            grid: {
                                display: false,
                            },
                            border: {
                                display: false,
                            },
                            stacked: true,
                        },
                        y: {
                            display: false,
                            beginAtZero: true,
                            grid: {
                                display: false,
                            },
                            border: {
                                display: false,
                            },
                            stacked: true, // stack the bars
                        },
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                },
            });
        }
    }, []);

    return (
        <div className="p-6 bg-slate-50 shadow rounded-md flex-1">
            <div className="flex justify-between items-center">
                <h1 className="text-primary font-semibold text-xl my-1">
                    Week Payments
                </h1>
                <BarChart2
                    className="text-primary w-8 h-8 p-2 cursor-pointer rounded-full bg-indigo-50"
                    size={20}
                />
            </div>
            <canvas className="mt-6" id="myChart" ref={chartRef} />
        </div>
    );
}
