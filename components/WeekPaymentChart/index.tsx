import React, { useEffect, useRef } from "react";
import { BarChart2 } from "lucide-react";
import Chart from "chart.js/auto";
import colors from "@/styles/colors/colors";

export default function WeekPaymentChart() {
    const chartRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const myChartRef = chartRef.current?.getContext("2d"); // Add optional chaining operator

        if (myChartRef) {
            // Add null check
            new Chart(myChartRef, {
                type: "bar",
                data: {
                    labels: [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday",
                    ],
                    datasets: [
                        {
                            label: undefined,
                            data: [12, 19, 3, 5, 2, 3, 7], // replace this with your data
                            backgroundColor: colors.primary,
                            borderColor: colors.primary,
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            display: true, // show x-axis labels
                            grid: {
                                display: false, // hide grid lines on x-axis
                            },
                        },
                        y: {
                            display: false, // hide y-axis labels
                            beginAtZero: true,
                            grid: {
                                display: false, // hide grid lines on y-axis
                            },
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
            <canvas id="myChart" ref={chartRef} />
        </div>
    );
}
