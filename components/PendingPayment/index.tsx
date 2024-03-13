import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { ChevronsUpDown } from "lucide-react";

const users = [
    {
        Name: "John Doe",
        SCNO: "SCNO001",
        Amount: "200.00",
    },
    {
        Name: "Jane Smith",
        SCNO: "SCNO002",
        Amount: "300.00",
    },
    {
        Name: "Bob Johnson",
        SCNO: "SCNO003",
        Amount: "400.00",
    },
    {
        Name: "Alice Williams",
        SCNO: "SCNO004",
        Amount: "500.00",
    },
];

export function PendingPayment() {
    return (
        <>
            <div className="p-6 bg-slate-50 shadow rounded-md">
                <div className="flex justify-between items-center">
                    <h1 className="text-primary font-semibold text-xl my-1">
                        Pending Payments
                    </h1>
                    <ChevronsUpDown
                        className="text-primary w-8 h-8 p-2 cursor-pointer rounded-full bg-indigo-50"
                        size={20}
                    />
                </div>
                <Table className="bg-slate-50 shadow rounded-md mt-5 p-6">
                    <TableHeader className="pr-6">
                        <TableRow>
                            <TableHead className="pl-6">Name</TableHead>
                            <TableHead className="pl-6">SCNO</TableHead>
                            <TableHead className="pl-6">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user, index) => (
                            <TableRow key={index} className="border-none">
                                <TableCell className="font-bold py-6 w-2/6">
                                    {user.Name}
                                </TableCell>
                                <TableCell className="font-bold py-6 w-1/6">
                                    {user.SCNO}
                                </TableCell>
                                <TableCell className="font-bold py-6 w-1/6">
                                    Ksh. {user.Amount}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    );
}
