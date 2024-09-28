import { Card } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { TopCustomer } from "@/utils/TopCustomer";
const Top10CustomerTable = () => {
    return (
        <Card className="p-8">
            <div className="flex justify-between items-center">
                <h1 className="text-[1.12rem] ">Top 10 Customers by Sales</h1>
                <Select>
                    <SelectTrigger className="w-[100px] bg-[#f2f2f2]">
                        <SelectValue placeholder="YTD" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">YTD</SelectItem>
                        <SelectItem value="dark">MTD</SelectItem>
                        <SelectItem value="system">ALL</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="mt-6">
            <Table>
                <TableHeader>
                    <TableRow className="bg-green-800 hover:bg-green-800 ">
                        <TableHead className="text-white text-[15px]" >Customer No.</TableHead>
                        <TableHead className="text-white text-[15px]">Customer Name</TableHead>
                        <TableHead className="text-right text-white text-[15px]">Sales Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        TopCustomer.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell className="text-[13px] text-gray-700">{product.cusNo}</TableCell>
                                <TableCell className="text-[13px] text-gray-700">{product.Customer}</TableCell>
                                <TableCell className="text-right text-[13px] text-gray-700">{product.salesAmount}</TableCell>
                            </TableRow>
                        ))
                    }
                    
                </TableBody>
            </Table>
            </div>

        </Card>
    );
};

export default Top10CustomerTable;

