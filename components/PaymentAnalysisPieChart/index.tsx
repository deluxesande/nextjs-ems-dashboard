import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import colors from "@/styles/colors/colors";

export default function PaymentAnalysisPieChart() {
    const chartRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (chartRef.current) {
            const myChartRef = chartRef.current.getContext("2d");

            const data = [12, 19];
            const total = data.reduce((a, b) => a + b, 0);
            const labels = ["Payment Done", "Payment Pending"].map(
                (label, index) => {
                    const value = data[index];
                    const percentage = ((value / total) * 100).toFixed(2); // calculate the percentage
                    return label + ": " + value + " (" + percentage + "%)"; // append the percentage to the label
                }
            );

            if (!myChartRef) return;
            new Chart(myChartRef, {
                type: "pie",
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: "My Data",
                            data: data, // replace this with your data
                            backgroundColor: [colors.primary, colors.tertiary],
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            display: false,
                            grid: {
                                display: false,
                            },
                            border: {
                                display: false,
                            },
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
                        },
                    },
                    plugins: {
                        legend: {
                            display: true,
                            position: "bottom", // position the legend at the bottom
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    const index = context.dataIndex;
                                    const value = context.dataset.data[index];
                                    const percentage = (
                                        (value / total) *
                                        100
                                    ).toFixed(2); // calculate the percentage
                                    return (
                                        ": " + value + " (" + percentage + "%)"
                                    ); // append the percentage to the label
                                },
                            },
                        },
                    },
                },
            });
        }
    }, []);

    return (
        <div
            className="flex flex-1 justify-center items-center"
            style={{ width: "300px", height: "300px" }}
        >
            <canvas ref={chartRef} />
        </div>
    );
}
