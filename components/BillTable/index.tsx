import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const bills = [
    {
        UID: "UID001",
        Name: "John Doe",
        Address: "123 Main St",
        SCNO: "SCNO001",
        Units: 10,
        Date: "2022-01-01",
        DueDate: "2022-02-01",
        DueAmount: "200.00",
        TotalAmount: "250.00",
    },
    {
        UID: "UID002",
        Name: "Jane Smith",
        Address: "456 Elm St",
        SCNO: "SCNO002",
        Units: 15,
        Date: "2022-01-15",
        DueDate: "2022-02-15",
        DueAmount: "300.00",
        TotalAmount: "350.00",
    },
    {
        UID: "UID003",
        Name: "Bob Johnson",
        Address: "789 Pine St",
        SCNO: "SCNO003",
        Units: 20,
        Date: "2022-01-20",
        DueDate: "2022-02-20",
        DueAmount: "400.00",
        TotalAmount: "450.00",
    },
    {
        UID: "UID004",
        Name: "Alice Williams",
        Address: "321 Oak St",
        SCNO: "SCNO004",
        Units: 25,
        Date: "2022-01-25",
        DueDate: "2022-02-25",
        DueAmount: "500.00",
        TotalAmount: "550.00",
    },
];

export function BillTable() {
    return (
        <Table className="bg-slate-50 shadow rounded-md mt-5">
            <TableHeader className="pr-6">
                <TableRow>
                    <TableHead className="w-[100px] pl-6">UID</TableHead>
                    <TableHead className="pl-6">Name</TableHead>
                    <TableHead className="pl-6">Address</TableHead>
                    <TableHead className="pl-6">SCNO</TableHead>
                    <TableHead className="pl-6">Units</TableHead>
                    <TableHead className="pl-6">Date</TableHead>
                    <TableHead className="pl-6">Due Date</TableHead>
                    <TableHead className="pl-6">Due Amount</TableHead>
                    <TableHead className="pl-6">Total Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {bills.map((bill, index) => (
                    <TableRow key={index} className="border-none">
                        <TableCell className="font-bold py-6 pl-6">
                            {bill.UID}
                        </TableCell>
                        <TableCell className="font-bold py-6 pl-6 w-96">
                            {bill.Name}
                        </TableCell>
                        <TableCell className="font-bold py-6 pl-6">
                            {bill.Address}
                        </TableCell>
                        <TableCell className="font-bold py-6 pl-6">
                            {bill.SCNO}
                        </TableCell>
                        <TableCell className="font-bold py-6 pl-6">
                            {bill.Units}
                        </TableCell>
                        <TableCell className="font-bold py-6 pl-6">
                            {bill.Date}
                        </TableCell>
                        <TableCell className="font-bold py-6 pl-6">
                            {bill.DueDate}
                        </TableCell>
                        <TableCell className="font-bold py-6 pl-6">
                            Ksh. {bill.DueAmount}
                        </TableCell>
                        <TableCell className="font-bold py-6 pl-6">
                            Ksh. {bill.TotalAmount}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
