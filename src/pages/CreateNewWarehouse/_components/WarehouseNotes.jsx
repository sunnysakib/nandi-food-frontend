import { Textarea } from "@/components/ui/textarea"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const WarehouseNotes = () => {
    return (
        <div className="flex flex-col space-y-6">
            <Textarea className="h-[150px]" placeholder="Enter warehouse notes here ..." />
            <div className="flex items-center space-x-3">
                <Input type="file" placeholder="file" />
                <Button type="submit" className="bg-green-800 hover:bg-green-800 rounded-full">upload file</Button>
            </div>
            <div className="mt-6">

                <Table className="border">
                    <TableHeader>
                        <TableRow className="bg-green-800 hover:bg-green-800 ">
                            <TableHead className="text-white text-[15px]" >File Name</TableHead>
                            <TableHead className="text-white text-[15px]">Date Uploaded</TableHead>
                            <TableHead className=" text-white text-[15px]">Uploaded by</TableHead>
                            <TableHead className="text-right text-white text-[15px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-[13px] text-gray-700">Warehouse Storage Procedures.pdf</TableCell>
                            <TableCell className="text-[13px] text-gray-700">2023-10-30</TableCell>
                            <TableCell className=" text-[13px] text-gray-700">John Doe</TableCell>
                            <TableCell className="text-right text-[13px] text-gray-700"><X className="cursor-pointer hover:text-red-800 w-5 h-5 text-red-600" /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-[13px] text-gray-700">Warehouse Storage Procedures.pdf</TableCell>
                            <TableCell className="text-[13px] text-gray-700">2023-10-30</TableCell>
                            <TableCell className=" text-[13px] text-gray-700">John Doe</TableCell>
                            <TableCell className="text-right text-[13px] text-gray-700"><X className="cursor-pointer hover:text-red-800 w-5 h-5 text-red-600" /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-[13px] text-gray-700">Warehouse Storage Procedures.pdf</TableCell>
                            <TableCell className="text-[13px] text-gray-700">2023-10-30</TableCell>
                            <TableCell className=" text-[13px] text-gray-700">John Doe</TableCell>
                            <TableCell className="text-right text-[13px] text-gray-700"><X className="cursor-pointer hover:text-red-800 w-5 h-5 text-red-600" /></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
        </div>
    );
};

export default WarehouseNotes;