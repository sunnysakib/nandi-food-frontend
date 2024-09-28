import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const CreateNewWarehouse = () => {
    return (
        <div className="flex flex-col justify-start items-left w-full p-6 bg-yellow-300 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Add New Employee</h1>

            <div className="flex gap-6 w-full ">
                <div className="grid gap-1.5 w-1/2 ">
                <div className="grid gap-1.5">
                    <Label htmlFor="Employee">Employee No.*: </Label>
                    <Input type="text" id="employee_no" placeholder="EE003" required />
                </div>
                <div className="flex gap-6">
                    <div className="flex w-full  max-w-sm flex-col">
                        <Label htmlFor="First Name">First Name*: </Label>
                        <Input type="text" id="first_name" placeholder="Thabani" required />
                    </div>
                    <div className="flex w-full  max-w-sm  flex-col">
                        <Label htmlFor="Middle_Name">Middle Name*: </Label>
                        <Input type="text" id="Middle_Name" placeholder="" required />
                    </div>
                    <div className="flex w-full  max-w-sm  flex-col">
                        <Label htmlFor="Last_Name">Last Name*: </Label>
                        <Input type="text" id="last_name" placeholder="Mlambo" required />
                    </div>
                </div>

                <div className="grid gap-1.5">
                    <Label htmlFor="Employee">Position*: </Label>
                    <Input type="text" id="employee_no" placeholder="EE003" required />
                </div>

                <div className="grid gap-1.5">
                    <Label htmlFor="fruit">Position*: </Label>
                    <Select id="fruit">
                        <SelectTrigger className="w-full"> {/* Changed to w-full for full width */}
                            <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Sales Manager</SelectLabel>
                                <SelectItem value="Sales Manager">Sales Manager</SelectItem>
                                <SelectItem value="Sales Manager">Sales Manager</SelectItem>

                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <hr />
                <div className="grid gap-1.5">
                    <Label htmlFor="location">Default Location*: </Label>
                    <Select id="location">
                        <SelectTrigger className="w-full"> {/* Changed to w-full for full width */}
                            <SelectValue placeholder="WH01 Edmonton Warehouse" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Sales Manager</SelectLabel>
                                <SelectItem value="WH01 Edmonton Warehouse">WH01 Edmonton Warehouse</SelectItem>
                                <SelectItem value="WH01 Edmonton Warehouse">WH01 Edmonton Warehouse</SelectItem>

                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex gap-8">
                    <div className="flex w-full  max-w-lg flex-col">
                        <Label htmlFor="Address1">Address1*: </Label>
                        <Input type="text" id="Address1" placeholder="7931 Coronet Road" required />
                    </div>
                    <div className="flex w-full  max-w-lg  flex-col">
                        <Label htmlFor="Address2">Address2*: </Label>
                        <Input type="text" id="Address2" placeholder="" required />
                    </div>
                </div>

                <div className="flex gap-8">
                    <div className="flex w-full  max-w-lg  flex-col">
                        <Label htmlFor="Address2">City*: </Label>
                        <Select id="location">
                            <SelectTrigger className="w-full"> 
                                <SelectValue placeholder="Edmonton" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>City*:</SelectLabel>
                                    <SelectItem value="Edmonton">Edmonton</SelectItem>
                                    <SelectItem value="Edmonton">Edmonton</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex w-full  max-w-lg flex-col">
                        <Label htmlFor="location">State/Province*:</Label>
                        <Select id="location">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Alberta" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>State/Province*</SelectLabel>
                                    <SelectItem value="Alberta">Alberta</SelectItem>
                                    <SelectItem value="Alberta">Alberta</SelectItem>

                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="flex gap-8">
                    <div className="flex w-full  max-w-lg flex-col">
                        <Label htmlFor="Address1">Zip/Postal code*: </Label>
                        <Input type="text" id="Address1" placeholder="T6E 4N7" required />
                    </div>
                    <div className="flex w-full  max-w-lg  flex-col">
                        <Label htmlFor="Address2">Country*: </Label>
                        <Select id="location">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="CANADA" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel></SelectLabel>
                                    <SelectItem value="CANADA">CANADA</SelectItem>
                                    <SelectItem value="CANADA">CANADA</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <hr />

                <div className="flex gap-8">
                    <div className="flex w-full  max-w-lg flex-col">
                        <Label htmlFor="Address1">Email*: </Label>
                        <Input type="email" id="Address1" placeholder="info@nandifoods.com" required />
                    </div>
                    <div className="flex w-full  max-w-lg  flex-col">
                        <Label htmlFor="Address2">Phone*: </Label>
                        <Input type="text" id="Address2" placeholder="+1780 328 0957" required />
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="flex w-full  max-w-sm flex-col">
                        <Label htmlFor="Address1">Mobile*: </Label>
                        <Input type="email" id="Address1" placeholder="+1 587 416 4371" required />
                    </div>
                </div>

                <hr />


                <div className="flex gap-8">
                    <div className="flex w-full max-w-lg flex-col">
                        <Label htmlFor="certificates1">Permits and Certificates 1</Label>
                        <Select id="certificates1" name="certificates1">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Permit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel></SelectLabel>
                                    <SelectItem value="food_handler_permit">Food Handler Permit</SelectItem>
                                    <SelectItem value="food_safety_management">Food Safety Management Certificate</SelectItem>
                                    {/* Add more options as needed */}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex w-full max-w-lg flex-col">
                        <Label htmlFor="certificates2">Permits and Certificates 2</Label>
                        <Select id="certificates2" name="certificates2">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Certificate" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Permits</SelectLabel>
                                    <SelectItem value="food_safety_management">Food Safety Management Certificate</SelectItem>
                                    <SelectItem value="other_certificate">Other Certificate</SelectItem>
                                    {/* Add more options as needed */}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="flex gap-8">
                    <div className="flex w-full max-w-lg flex-col">
                        <Label htmlFor="certificates1">Permits and Certificates 3</Label>
                        <Select id="certificates1" name="certificates1">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Permit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel></SelectLabel>
                                    <SelectItem value="food_handler_permit"> Food Handler Permit </SelectItem>
                                    <SelectItem value="food_safety_management">Food Handler Permit</SelectItem>
                                    {/* Add more options as needed */}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex w-full max-w-lg flex-col">
                        <Label htmlFor="certificates2">Permits and Certificates 4</Label>
                        <Select id="certificates2" name="certificates2">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Certificate" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel></SelectLabel>
                                    <SelectItem value="food_safety_management"></SelectItem>
                                    <SelectItem value="other_certificate"></SelectItem>
                                    {/* Add more options as needed */}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                
              
              
                </div>
                <div className="grid gap-1.5 w-1/2">
                    <Label htmlFor="Employee">Employee No.*: </Label>
                    <Input type="text" id="employee_no" placeholder="EE003" required />
                </div>
            </div>



            {/* <form className="grid w-full max-w-4xl items-center gap-6 bg-white p-6 rounded-md shadow-lg">
               
            </form> */}

                <div className="flex  my-3">
                    <div className="flex w-full gap-4 max-w-xl2 flex-col">
                        <Label htmlFor="certificates1">Employee Notes</Label>
                        <Textarea placeholder="Enter Employee notes here [240Character max]"/>
                    </div>
                </div>

                <div className="flex w-full max-w-lx gap-4 items-center space-x-2">
                    <Input type="file" placeholder="Email" />
                    <Button className="bg-green-900 px-4  rounded-3xl " type="">Subscribe</Button>
                </div>

                <div className="flex  my-3 bg-white p-6 rounded-md ">
                    <Table>
                        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                        <TableHeader className="bg-green-900">
                            <TableRow>
                                <TableHead className="w-[30%]">File Name</TableHead>
                                <TableHead className="w-[30%]">Date Uploaded</TableHead>
                                <TableHead className="w-[20%]">Uploaded By</TableHead>
                                <TableHead className="w-[20%]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell >Warehouse Storage Procedures.pdf</TableCell>
                                <TableCell>2023-10-30</TableCell>
                                <TableCell>John Doe</TableCell>
                                <TableCell >X</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >Warehouse Storage Procedures.pdf</TableCell>
                                <TableCell>2023-10-30</TableCell>
                                <TableCell>John Doe</TableCell>
                                <TableCell >X</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >Warehouse Storage Procedures.pdf</TableCell>
                                <TableCell>2023-10-30</TableCell>
                                <TableCell>John Doe</TableCell>
                                <TableCell >X</TableCell>
                            </TableRow>
                        </TableBody>
                        </Table>
                       
                       
                </div>
                <div className="ml-auto flex gap-4">
                    <button className="bg-gray-300 px-4  rounded-3xl">Cancel</button>
                    <button className="bg-green-900  text-white px-4  rounded-3xl">Save</button>
                    <button className="bg-blue-700 text-white px-4  rounded-3xl">Approve</button>
                </div>

                

           
        </div>
    
    );
};

export default CreateNewWarehouse;
