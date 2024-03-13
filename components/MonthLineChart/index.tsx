import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import colors from "@/styles/colors/colors";

export default function LineChartComponent() {
    const chartRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (chartRef.current) {
            const myChartRef = chartRef.current.getContext("2d");

            if (myChartRef) {
                new Chart(myChartRef, {
                    type: "line",
                    data: {
                        labels: [
                            "SEP",
                            "OCT",
                            "NOV",
                            "DEC",
                            "JAN",
                            "FEB",
                            "MAR",
                        ],
                        datasets: [
                            {
                                label: "Monthly Payments",
                                data: [12, 19, 3, 5, 2, 3, 7], // replace this with your data
                                fill: false,
                                borderColor: colors.primary,
                                tension: 0.4, // increase this value to make the line smoother
                                pointRadius: 0, // hide points
                            },
                            {
                                label: "More Data",
                                data: [5, 10, 4, 8, 3, 6, 9], // replace this with your data
                                fill: false,
                                borderColor: colors.tertiary,
                                tension: 0.4, // increase this value to make the line smoother
                                pointRadius: 0, // hide points
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
                            tooltip: {
                                callbacks: {
                                    label: function (context) {
                                        const label =
                                            context.dataset.label || "";
                                        const value = context.parsed.y;
                                        return `${label}: ${value}`;
                                    },
                                },
                            },
                        },
                    },
                });
            }
        }
    }, []);

    return (
        <div className="w-3/4">
            <canvas ref={chartRef} />
        </div>
    );
}
