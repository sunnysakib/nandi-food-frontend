import { Card } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { TopProduct } from "@/utils/TopProduct";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
const Top10ProductsTable = () => {
    return (
        <Card className="p-8">
            <div className="flex justify-between items-center">
                <h1 className="text-[1.12rem] ">Top 10 Products by Sales</h1>
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
                        <TableHead className="text-white text-[15px]" >SKU</TableHead>
                        <TableHead className="text-white text-[15px]">Product Name</TableHead>
                        <TableHead className="text-right text-white text-[15px]">Sales Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        TopProduct.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell className="text-[13px] text-gray-700">{product.sku}</TableCell>
                                <TableCell className="text-[13px] text-gray-700">{product.name}</TableCell>
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

export default Top10ProductsTable;

