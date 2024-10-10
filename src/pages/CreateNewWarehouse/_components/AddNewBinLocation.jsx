import { Button } from "@/components/ui/button"
import { MapPinPlus } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon, ImageUp } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
const AddNewBinLocation = () => {
    const [date, setDate] = useState()
    return (
        <div>
            <Dialog>
                <DialogTrigger><Button size="sm" className="bg-primary hover:bg-green-900 !px-5 rounded-lg text-[12px]">
                    <MapPinPlus className="mr-2 size-4" />
                    Add New Bin Location
                </Button></DialogTrigger>
                <DialogContent className="p-0 w-[65%]  ">
                    <DialogHeader>
                        <DialogTitle className="bg-primary text-white overflow-hidden rounded-t-md p-6">Add New Bin Location</DialogTitle>
                        <form>
                            <div className="lg:grid grid-cols-8 flex flex-col gap-8 p-6 max-h-[80vh] overflow-y-scroll">
                                <div className="col-span-6">
                                    <div className="w-full grid grid-cols-2 gap-8">
                                        <div className="grid w-full items-center gap-1.5">
                                            <Label className="" htmlFor="entity">Warehouse Name*:</Label>
                                            <Select >
                                                <SelectTrigger className="border">
                                                    <SelectValue placeholder="WH001 Dallas Warehouse" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="WH001">WH001 Dallas Warehouse </SelectItem>
                                                    <SelectItem value="WH002">WH002 Dallas Warehouse</SelectItem>
                                                    <SelectItem value="WH003">WH003 Dallas Warehouse</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="grid w-full  items-center gap-1.5">
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
                                        <div className="grid w-full items-center gap-1.5">
                                            <Label className="" htmlFor="entity">Bin Storage Type*:</Label>
                                            <Select >
                                                <SelectTrigger className="border">
                                                    <SelectValue placeholder="Pick Face Storage 1" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="WH001">Pick Face Storage 1 </SelectItem>
                                                    <SelectItem value="WH002">Pick Face Storage 2</SelectItem>
                                                    <SelectItem value="WH003">Pick Face Storage 3</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="grid w-full items-center gap-1.5">
                                            <Label className="" htmlFor="entity">Bin Assignment Type:</Label>
                                            <Select >
                                                <SelectTrigger className="border">
                                                    <SelectValue placeholder="Floating" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="WH001">Floating </SelectItem>
                                                    <SelectItem value="WH002">Floating</SelectItem>
                                                    <SelectItem value="WH003">Floating</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="grid  w-full items-center gap-1.5">
                                            <Label htmlFor="zCode">Bin Location Zone Code*:</Label>
                                            <Input type="text" id="zCode" />
                                        </div>
                                        <div className="grid  w-full items-center gap-1.5">
                                            <Label htmlFor="zName">Zone Name*:</Label>
                                            <Input type="text" id="zName" />
                                        </div>
                                        <div className="grid  w-full items-center gap-1.5">
                                            <Label htmlFor="lSection">Bin Location Section No:</Label>
                                            <Input type="text" id="lSection" />
                                        </div>
                                        <div className="grid  w-full items-center gap-1.5">
                                            <Label htmlFor="sName">Section Name:</Label>
                                            <Input type="text" id="sName" />
                                        </div>
                                        <div className="grid  w-full items-center gap-1.5">
                                            <Label htmlFor="lAisle">Bin Location Aisle No:</Label>
                                            <Input type="text" id="lAisle" />
                                        </div>
                                        <div className="grid  w-full items-center gap-1.5">
                                            <Label htmlFor="aName">Aisle Name:</Label>
                                            <Input type="text" id="aName" />
                                        </div>
                                        <div className="grid  w-full items-center gap-1.5">
                                            <Label htmlFor="rNo">Bin Location Rack No:</Label>
                                            <Input type="text" id="rNo" />
                                        </div>
                                        <div className="grid  w-full items-center gap-1.5">
                                            <Label htmlFor="rName">Rack Name:</Label>
                                            <Input type="text" id="rName" />
                                        </div>
                                        <div className="grid  w-full items-center gap-1.5">
                                            <Label htmlFor="rNo">Bin Location Shelf No:</Label>
                                            <Input type="text" id="sNo" />
                                        </div>
                                        <div className="grid  w-full items-center gap-1.5">
                                            <Label htmlFor="sName">Shelf Name:</Label>
                                            <Input type="text" id="sName" />
                                        </div>
                                        <div className="grid  w-full items-center gap-1.5">
                                            <Label htmlFor="bNo">Bin Number:</Label>
                                            <Input type="text" id="bNo" />
                                        </div>
                                        <div className="grid  w-full items-center gap-1.5">
                                            <Label htmlFor="bName">Bin Name:</Label>
                                            <Input type="text" id="bName" />
                                        </div>
                                        <div className="grid  w-full items-center gap-1.5">
                                            <Label htmlFor="displayName">Bin Location Display Name:</Label>
                                            <Input type="text" id="displayName" />
                                        </div>
                                        <div className="grid  w-full items-center gap-1.5">
                                            <Label htmlFor="iUint">Metric/Imperial Units:</Label>
                                            <Input type="text" id="iUint" />
                                        </div>
                                        <Separator className="col-span-2" />
                                        <div className="col-span-2">
                                            <p className="text-sm">Location Dimensions:</p>
                                            <div className="flex gap-8">
                                                <div className="grid  w-full items-center gap-1.5">
                                                    <Label htmlFor="length">Length</Label>
                                                    <Input type="text" id="length" />
                                                </div>
                                                <div className="grid  w-full items-center gap-1.5">
                                                    <Label htmlFor="width">Width</Label>
                                                    <Input type="text" id="width" />
                                                </div>
                                                <div className="grid  w-full items-center gap-1.5">
                                                    <Label htmlFor="height">Height</Label>
                                                    <Input type="text" id="height" />
                                                </div>
                                            </div>
                                        </div>
                                        <Separator className="col-span-2" />
                                        <div className="grid  w-full items-center gap-1.5">
                                            <Label htmlFor="storage">Location Storage Capacity (M3):</Label>
                                            <Input type="text" id="storage" />
                                        </div>
                                        <div className="grid  w-full items-center gap-1.5">
                                            <Label htmlFor="pallet">
                                                Location Storage Capacity By Standard Loaded Pallet (SLP):</Label>
                                            <Input type="text" id="pallet" />
                                        </div>
                                        <Separator className="col-span-2" />
                                        <div className="grid w-full  items-center gap-1.5">
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
                                        <div className="grid w-full  items-center gap-1.5">
                                            <Label htmlFor="warehouse">End Date:</Label>
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
                                        <div className="grid w-full items-center gap-1.5">
                                            <Label className="" htmlFor="entity">Status:</Label>
                                            <Select >
                                                <SelectTrigger className="border">
                                                    <SelectValue placeholder="Active" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="active">Active</SelectItem>
                                                    <SelectItem value="deactive">Deactive</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <Separator className="col-span-2" />
                                        <div className="grid w-full  items-center gap-1.5">
                                            <Label htmlFor="warehouse">Last Updated:</Label>
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
                                        <div className="grid w-full items-center gap-1.5">
                                            <Label className="" htmlFor="entity">Last Updated by:</Label>
                                            <Select >
                                                <SelectTrigger className="border">
                                                    <SelectValue placeholder="Juan Lopez" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="juan">Juan Lopez</SelectItem>
                                                    <SelectItem value="sunny">Sunny Sakib</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="grid  w-full items-center gap-1.5">
                                            <Label htmlFor="pallet">
                                                Description:</Label>
                                            <Textarea />
                                        </div>
                                        <div className="grid  w-full items-center gap-1.5">
                                            <Label htmlFor="pallet">
                                                Files:</Label>
                                            <Input type="file" id="pallet" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <div className="shadow-lg h-[200px] relative rounded-xl">
                                        <label htmlFor="pallet" className="cursor-pointer w-full h-full flex items-center justify-center">
                                            <span className="font-medium">Add Photos</span>
                                        </label>
                                        <Input className="opacity-0 absolute inset-0 w-full h-full" type="file" id="pallet" />
                                    </div>
                                </div>
                            </div>
                            <Separator className="w-full" />
                            <div className="flex justify-end gap-2 p-6">
                                <Button variant="outline">
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                >
                                    Save
                                </Button>
                            </div>
                        </form>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AddNewBinLocation;