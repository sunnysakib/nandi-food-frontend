
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
const EmployeeList = () => {
    return (
        <div>
             <Table className="border">
                    <TableHeader>
                        <TableRow className="bg-green-800 hover:bg-green-800 ">
                            <TableHead className="text-white text-[15px]" >Employee No.</TableHead>
                            <TableHead className="text-white text-[15px]">First Name</TableHead>
                            <TableHead className=" text-white text-[15px]">Middle Name</TableHead>
                            <TableHead className=" text-white text-[15px]">Last Name</TableHead>
                            <TableHead className=" text-white text-[15px]">Position</TableHead>
                            <TableHead className=" text-white text-[15px]">Email</TableHead>
                            <TableHead className=" text-white text-[15px]">Office Phone</TableHead>
                            <TableHead className="text-right text-white text-[15px]">Mobile Phone</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-[13px] text-gray-700">EE001</TableCell>
                            <TableCell className="text-[13px] text-gray-700">Bongi</TableCell>
                            <TableCell className="text-[13px] text-gray-700"></TableCell>
                            <TableCell className="text-[13px] text-gray-700">Mlambo</TableCell>
                            <TableCell className=" text-[13px] text-gray-700">Director</TableCell>
                            <TableCell className=" text-[13px] text-gray-700">bongi@nandifoods.com</TableCell>
                            <TableCell className=" text-[13px] text-gray-700">+1 780 328 0957</TableCell>
                            <TableCell className="text-right text-[13px] text-gray-700">+1 780 868 7784</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-[13px] text-gray-700">EE002</TableCell>
                            <TableCell className="text-[13px] text-gray-700">Aya</TableCell>
                            <TableCell className="text-[13px] text-gray-700"></TableCell>
                            <TableCell className="text-[13px] text-gray-700">Mlambo</TableCell>
                            <TableCell className=" text-[13px] text-gray-700">Finance Manager</TableCell>
                            <TableCell className=" text-[13px] text-gray-700">finance@nandifoods.com</TableCell>
                            <TableCell className=" text-[13px] text-gray-700">+1 780 328 0957</TableCell>
                            <TableCell className="text-right text-[13px] text-gray-700">+1 780 868 7784</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-[13px] text-gray-700">EE003</TableCell>
                            <TableCell className="text-[13px] text-gray-700">Thabani</TableCell>
                            <TableCell className="text-[13px] text-gray-700"></TableCell>
                            <TableCell className="text-[13px] text-gray-700">Mlambo</TableCell>
                            <TableCell className=" text-[13px] text-gray-700">Sales Manager</TableCell>
                            <TableCell className=" text-[13px] text-gray-700">thabani@nandifoods.com</TableCell>
                            <TableCell className=" text-[13px] text-gray-700">+1 780 328 0957</TableCell>
                            <TableCell className="text-right text-[13px] text-gray-700">+1 780 868 7784</TableCell>
                        </TableRow>
                       
                        
                    </TableBody>
                </Table>
        </div>
    );
};

export default EmployeeList;