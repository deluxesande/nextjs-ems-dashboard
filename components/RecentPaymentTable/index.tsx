import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { MoreHorizontal } from "lucide-react";

const payments = [
    {
        Name: "John Doe",
        Amount: "200.00",
        Status: "Paid",
        Date: "12/12/2021",
    },
    {
        Name: "Jane Doe",
        Amount: "200.00",
        Status: "Unpaid",
        Date: "12/12/2023",
    },
    {
        Name: "John Smith",
        Amount: "200.00",
        Status: "Paid",
        Date: "2/12/2024",
    },
    {
        Name: "John Eden",
        Amount: "200.00",
        Status: "unpaid",
        Date: "1/1/2024",
    },
];

function calculateTimeElapsed(dateString: string) {
    const datePaid = new Date(dateString).getTime();
    const now = new Date().getTime();
    const timeElapsed = now - datePaid; // time elapsed in milliseconds

    const seconds = Math.floor(timeElapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return days + " days ago";
    } else if (hours > 0) {
        return hours + " hours ago";
    } else if (minutes > 0) {
        return minutes + " minutes ago";
    } else {
        return seconds + " seconds ago";
    }
}

export function RecentPaymentTable() {
    return (
        <>
            <div className="p-6 bg-slate-50 shadow rounded-md">
                <div className="flex justify-between items-center">
                    <h1 className="text-primary font-semibold text-xl my-1">
                        Recent Payments
                    </h1>
                    <MoreHorizontal
                        className="text-primary w-8 h-8 p-2 cursor-pointer rounded-full bg-indigo-50"
                        size={20}
                    />
                </div>
                <Table className="bg-slate-50 shadow rounded-md mt-5 p-6">
                    {/* <TableHeader className="pr-6">
                        <TableRow className="border-none">
                            <TableHead className="pl-6">Users</TableHead>
                            <TableHead className="pl-6">Amount</TableHead>
                            <TableHead className="pl-6">Status</TableHead>
                            <TableHead className="pl-6">Time</TableHead>
                        </TableRow>
                    </TableHeader> */}
                    <TableBody>
                        {payments.map((payment, index) => (
                            <TableRow key={index} className="border-none">
                                <TableCell className="font-bold py-6 pl-6 w-1/6">
                                    {payment.Name}
                                </TableCell>
                                <TableCell className="font-bold py-6 pl-6 w-1/6">
                                    Ksh. {payment.Amount}
                                </TableCell>
                                <TableCell
                                    className={`font-semibold py-6 pl-6 w-1/6 ${
                                        payment.Status === "Paid"
                                            ? "text-green-500"
                                            : payment.Status === "Pending"
                                            ? "text-yellow-500"
                                            : "text-red-500"
                                    }`}
                                >
                                    <span
                                        className={`inline-block px-2 py-1 rounded items-center ${
                                            payment.Status === "Paid"
                                                ? "bg-green-200 text-green-700"
                                                : payment.Status === "Pending"
                                                ? "bg-yellow-200 text-yellow-700"
                                                : "bg-red-200 text-red-700"
                                        }`}
                                    >
                                        <span
                                            className={`inline-block h-2 w-2 mr-2 rounded-full ${
                                                payment.Status === "Paid"
                                                    ? "bg-green-500"
                                                    : payment.Status ===
                                                      "Pending"
                                                    ? "bg-yellow-500"
                                                    : "bg-red-500"
                                            }`}
                                        ></span>
                                        {payment.Status}
                                    </span>
                                </TableCell>
                                <TableCell className="font-bold py-6 pl-6 w-1/6">
                                    {calculateTimeElapsed(payment.Date)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    );
}
