import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { MoreHorizontal } from "lucide-react";

const users = [
    {
        Name: "John Doe",
        Address: "123 Main St",
        Date: "12/12/2021",
        Amount: "200.00",
    },
    {
        Name: "Jane Smith",
        Address: "456 Elm St",
        Date: "12/12/2021",
        Amount: "300.00",
    },
    {
        Name: "Bob Johnson",
        Address: "789 Pine St",
        Date: "12/12/2021",
        Amount: "400.00",
    },
    {
        Name: "Alice Williams",
        Address: "321 Oak St",
        Date: "12/12/2021",
        Amount: "500.00",
    },
];

export function PaymentTable() {
    return (
        <>
            <div className="p-6 bg-slate-50 shadow rounded-md">
                <div className="flex justify-between items-center">
                    <h1 className="text-primary font-semibold text-xl my-1">
                        Payment Details
                    </h1>
                    <MoreHorizontal
                        className="text-primary w-8 h-8 p-2 cursor-pointer rounded-full bg-indigo-50"
                        size={20}
                    />
                </div>
                <Table className="bg-slate-50 shadow rounded-md mt-5 p-6">
                    <TableHeader className="pr-6">
                        <TableRow>
                            <TableHead className="pl-6">Users</TableHead>
                            <TableHead className="pl-6">Address</TableHead>
                            <TableHead className="pl-6">Date</TableHead>
                            <TableHead className="pl-6">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user, index) => (
                            <TableRow key={index} className="border-none">
                                <TableCell className="font-bold py-6 w-1/6">
                                    {user.Name}
                                </TableCell>
                                <TableCell className="font-bold py-6 w-1/6">
                                    {user.Address}
                                </TableCell>
                                <TableCell className="font-bold py-6 w-1/6">
                                    {user.Date}
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
