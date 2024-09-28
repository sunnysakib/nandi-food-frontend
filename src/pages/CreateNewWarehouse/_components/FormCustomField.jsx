
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { CalendarIcon, ImageUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator";
import WarehouseNotes from "./WarehouseNotes";
import EmployeeList from "./EmployeeList";

const FormCustomField = () => {
    const [date, setDate] = useState()
    return (
        <div className="lg:grid grid-cols-2 flex flex-col gap-8 ">
            <form className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-8">
                    <div className="grid w-full col-span-2 items-center gap-1.5">
                        <Label htmlFor="entity">Entity*</Label>
                        <Select >
                            <SelectTrigger className="border">
                                <SelectValue placeholder="Nandi Food" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Nandi Food</SelectItem>
                                <SelectItem value="dark">Nandi Food</SelectItem>
                                <SelectItem value="system">Nandi Food</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="warehouse">Warehouse No.*</Label>
                        <Input type="text" id="warehouse" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="warehouse">Warehouse Name*</Label>
                        <Input type="text" id="warehouse" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="warehouse">Address1*</Label>
                        <Input type="text" id="warehouse" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="warehouse">Address2*</Label>
                        <Input type="text" id="warehouse" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="warehouse">Country*</Label>
                        <Select >
                            <SelectTrigger className="border">
                                <SelectValue placeholder="CANADA" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="canada">CANADA</SelectItem>
                                <SelectItem value="australia">AUSTALIA</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="warehouse">State/Province*</Label>
                        <Select >
                            <SelectTrigger className="border">
                                <SelectValue placeholder="Alberta" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="alberta">Alberta</SelectItem>
                                <SelectItem value="alberta">Alberta</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="warehouse">City*</Label>
                        <Select >
                            <SelectTrigger className="border">
                                <SelectValue placeholder="Edmondon" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="edmondon">Edmondon</SelectItem>
                                <SelectItem value="edmondon">Edmondon</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="warehouse">Zip/Postal code*</Label>
                        <Input type="text" id="warehouse" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="warehouse">Email*</Label>
                        <Input type="email" id="warehouse" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="warehouse">Phone*</Label>
                        <Input type="phone" id="warehouse" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="warehouse">Mobile*</Label>
                        <Input type="phone" id="warehouse" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="warehouse">Emergency Phone No.*</Label>
                        <Input type="phone" id="warehouse" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="warehouse">Warehouse Manager*</Label>
                        <Select >
                            <SelectTrigger className="border">
                                <SelectValue placeholder="Jack Doe" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="jack">Jack Doe</SelectItem>
                                <SelectItem value="bongi">Bongi Mlambo</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="warehouse">Warehouse Supervisor*</Label>
                        <Select >
                            <SelectTrigger className="border">
                                <SelectValue placeholder="Dingi Mahlangu" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="dingi">Dingi Mahlangu</SelectItem>
                                <SelectItem value="dingi">Dingi Mahlangu</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid w-full col-span-2 items-center gap-1.5">
                        <Label htmlFor="warehouse">Effective Date*</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        " justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="warehouse">Location Work Week*</Label>
                        <Select >
                            <SelectTrigger className="border">
                                <SelectValue placeholder="Monday - Friday" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="mtof">Monday - Friday</SelectItem>
                                <SelectItem value="mtof">Monday - Friday</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="warehouse">Work Week Days*</Label>
                        <Input type="phone" id="warehouse" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="warehouse">Business Hours Open*</Label>
                        <Select >
                            <SelectTrigger className="border">
                                <SelectValue placeholder="08:00 AM" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="date">08:00 AM</SelectItem>
                                <SelectItem value="date">08:00 AM</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="warehouse">Business Hours Close*</Label>
                        <Select >
                            <SelectTrigger className="border">
                                <SelectValue placeholder="05:00 AM" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="date">05:00 AM</SelectItem>
                                <SelectItem value="date">05:00 AM</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="warehouse">Last Updated*</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        " justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="warehouse">Last Updated by*</Label>
                        <Select >
                            <SelectTrigger className="border">
                                <SelectValue placeholder="Jack Doe" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="jack">Jack Doe</SelectItem>
                                <SelectItem value="bongi">Bongi Mlambo</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid w-full col-span-2  items-center gap-1.5">
                        <Label htmlFor="warehouse">Status*</Label>
                        <Select >
                            <SelectTrigger className="border">
                                <SelectValue placeholder="PENDING" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="jack">PENDING</SelectItem>
                                <SelectItem value="bongi">ONGOING</SelectItem>
                                <SelectItem value="bongi1">CLOSE</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </form>
            <div>
                <h1 className="text-center text-wrap text-xl py-4">Upload Warehouse Photos here</h1>
                <Card className="bg-[#f5f6f7] rounded-none flex justify-center items-center p-4 h-[500px]">
                    <div className="h-full w-full flex flex-col justify-center  items-center border-2 border-dashed border-blue-200">
                        <ImageUp className="text-green-800 size-16" />
                        <p className="text-center text-wrap  lg:w-[400px]">Drag & Drop background image(s) inside dashed region
                            (Can upload 3 photos max)</p>
                        <p className="text-center">or</p>
                        <Input className="w-[200px] border-green-800" id="picture" type="file" />
                    </div>
                </Card>
            </div>
            <div className="col-span-2">
                <Tabs defaultValue="Warehouse-Notes" className="">
                    <TabsList className="bg-transparent rounded-none ">
                        <div className="flex flex-wrap items-center space-x-4 text-sm">
                        <TabsTrigger className="" value="Warehouse-Notes">Warehouse Notes</TabsTrigger>
                            <Separator className="h-10" orientation="vertical" />
                            <TabsTrigger  value="bin">Bin Locations</TabsTrigger>
                            <Separator className="h-10" orientation="vertical" />
                            <TabsTrigger value="str">Storage Capacity</TabsTrigger>
                            <Separator className="h-10" orientation="vertical" />
                            <TabsTrigger value="people">People</TabsTrigger>
                            <Separator className="h-10" orientation="vertical" />
                            <TabsTrigger value="Compilence">Compilence</TabsTrigger>
                        </div>
                        
                    </TabsList>
                    <TabsContent value="Warehouse-Notes"><WarehouseNotes/></TabsContent>
                    <TabsContent value="bin">Change your password here.</TabsContent>
                    <TabsContent value="str">Storage</TabsContent>
                    <TabsContent value="people"><EmployeeList/></TabsContent>
                    <TabsContent value="Compilence"><WarehouseNotes/></TabsContent>
                </Tabs>
                <div className="flex justify-end space-x-2 mt-6">
                    <Button type="submit" variant="destructive" className=" rounded-full">Cancel</Button>
                    <Button type="submit" className="bg-green-800 hover:bg-green-800 rounded-full">Save</Button>
                    <Button type="submit" className="bg-blue-500 hover:bg-blue-700 rounded-full">Approve</Button>
                </div>

            </div>
        </div>
    );
};

export default FormCustomField;