import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { FilePenLine, Trash2 } from "lucide-react";

const users = [
    {
        UID: "UID001",
        Name: "John Doe",
        Address: "123 Main St",
        SCNO: "SCNO001",
        Amount: "200.00",
    },
    {
        UID: "UID002",
        Name: "Jane Smith",
        Address: "456 Elm St",
        SCNO: "SCNO002",
        Amount: "300.00",
    },
    {
        UID: "UID003",
        Name: "Bob Johnson",
        Address: "789 Pine St",
        SCNO: "SCNO003",
        Amount: "400.00",
    },
    {
        UID: "UID004",
        Name: "Alice Williams",
        Address: "321 Oak St",
        SCNO: "SCNO004",
        Amount: "500.00",
    },
];

export function UserTable() {
    return (
        <div className="overflow-x-auto">
            <Table className="bg-slate-50 shadow rounded-md mt-5">
                <TableHeader className="pr-6">
                    <TableRow>
                        <TableHead className="w-[100px] pl-6">UID</TableHead>
                        <TableHead className="pl-6">Name</TableHead>
                        <TableHead className="pl-6">Address</TableHead>
                        <TableHead className="pl-6">SCNO</TableHead>
                        <TableHead className="pl-6">Amount</TableHead>
                        <TableHead className="pl-6">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user, index) => (
                        <TableRow key={index} className="border-none">
                            <TableCell className="font-bold py-6 pl-6">
                                {user.UID}
                            </TableCell>
                            <TableCell className="font-bold py-6 pl-6 w-96">
                                {user.Name}
                            </TableCell>
                            <TableCell className="font-bold py-6 pl-6 w-96">
                                {user.Address}
                            </TableCell>
                            <TableCell className="font-bold py-6 pl-6">
                                {user.SCNO}
                            </TableCell>
                            <TableCell className="font-bold py-6 pl-6">
                                Ksh. {user.Amount}
                            </TableCell>
                            <TableCell className="font-bold py-6 pl-6 flex gap-2">
                                <FilePenLine
                                    className="cursor-pointer text-primary hover:scale-110 transform transition-all duration-200"
                                    size={20}
                                />
                                <div className="border-r border-gray-400 h-5"></div>
                                <Trash2
                                    className="cursor-pointer text-red-500 hover:scale-110 transform transition-all duration-200"
                                    size={20}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
