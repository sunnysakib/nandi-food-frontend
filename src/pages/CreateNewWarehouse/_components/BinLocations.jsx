import {
  Table,
  TableBody,
  TableCellBorder,
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
import AddNewBinLocation from "./AddNewBinLocation"

const data = [
  {
    warehouse: "WH01 Edmonton AB Warehouse",
    zone: "ZA",
    section: "ZA01",
    aisle: "ZA0102",
    rack: "ZA010201",
    shelf: "ZA01020103",
    bin: "",
    binName: "ZA01020103 Shelf A03",
    lengthCM: "274.00",
    widthCM: "122.00",
    heightCM: "172.00",
    volumeM3: "5.75",
    slp_capacity: "5.75",
    max_weight_capacity_kg: "5.75",
    sed_capacity_slp: "5.75",
    sed_capacity_slp_percent: "5.75",
    available_capacity_slp: "5.75",
    available_capacity_slp_percent: "5.75",
  },
  // Duplicate rows for demonstration
  {
    warehouse: "WH01 Edmonton AB Warehouse",
    zone: "ZA",
    section: "ZA01",
    aisle: "ZA0102",
    rack: "ZA010201",
    shelf: "ZA01020103",
    bin: "",
    binName: "ZA01020103 Shelf A03",
    lengthCM: "274.00",
    widthCM: "122.00",
    heightCM: "172.00",
    volumeM3: "5.75",
    slp_capacity: "5.75",
    max_weight_capacity_kg: "5.75",
    sed_capacity_slp: "5.75",
    sed_capacity_slp_percent: "5.75",
    available_capacity_slp: "5.75",
    available_capacity_slp_percent: "5.75",
  },
  {
    warehouse: "WH01 Edmonton AB Warehouse",
    zone: "ZA",
    section: "ZA01",
    aisle: "ZA0102",
    rack: "ZA010201",
    shelf: "ZA01020103",
    bin: "",
    binName: "ZA01020103 Shelf A03",
    lengthCM: "274.00",
    widthCM: "122.00",
    heightCM: "172.00",
    volumeM3: "5.75",
    slp_capacity: "5.75",
    max_weight_capacity_kg: "5.75",
    sed_capacity_slp: "5.75",
    sed_capacity_slp_percent: "5.75",
    available_capacity_slp: "5.75",
    available_capacity_slp_percent: "5.75",
  },
]

export default function BinLocations() {

  return (
    <div className="">
      <div className="flex flex-wrap items-center justify-between py-8">
        <h4>Warehouse Bin Locations List</h4>
        <AddNewBinLocation/>
      </div>
      <Table className="w-full border-collapse">
        <TableHeader>
          <TableRow className="bg-primary">
            <TableHead rowSpan={2} className="border-r">Warehouse</TableHead>
            <TableHead rowSpan={2} className="border-r">Zone</TableHead>
            <TableHead rowSpan={2} className="border-r">Section</TableHead>
            <TableHead rowSpan={2} className="border-r">Aisle</TableHead>
            <TableHead rowSpan={2} className="border-r">Rack</TableHead>
            <TableHead rowSpan={2} className="border-r">Shelf</TableHead>
            <TableHead rowSpan={2} className="border-r">Bin</TableHead>
            <TableHead rowSpan={2} className="border-r">Bin Name</TableHead>
            <TableHead colSpan={3} className="text-center border-r">Location Dimensions</TableHead>
            <TableHead colSpan={2} className="border-r">Location Capacity by Volume</TableHead>
            <TableHead colSpan={2} className="border-r">Location Capacity by Standard Loaded Pallets</TableHead>
            <TableHead colSpan={2} className="border-r">Location Max Weight Capacity</TableHead>
            <TableHead colSpan={2} className="border-r">Used Capacity</TableHead>
            <TableHead rowSpan={2} className="border-r">SLP %</TableHead>
            <TableHead colSpan={2} className="border-r">Available Capacity</TableHead>
            <TableHead rowSpan={2} className="border-r">SLP %</TableHead>
            <TableHead rowSpan={2} className="border-r">Action</TableHead>
          </TableRow>
          <TableRow className="bg-primary">
            <TableHead className="border-r">Length CM</TableHead>
            <TableHead className="border-r">Width CM</TableHead>
            <TableHead className="border-r">Height CM</TableHead>
            <TableHead colSpan={2} className="border-r">M<sup>3</sup></TableHead>
            <TableHead colSpan={2} className="border-r">SLP</TableHead>
            <TableHead colSpan={2} className="border-r">KG</TableHead>
            <TableHead colSpan={2} className="border-r">Sed Capacity SLP (Count)</TableHead>
            <TableHead colSpan={2} className="border-r">SLP (Count)</TableHead>
          </TableRow>

        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} className="">
              <TableCellBorder  >{row.warehouse}</TableCellBorder>
              <TableCellBorder >{row.zone}</TableCellBorder>
              <TableCellBorder>{row.section}</TableCellBorder>
              <TableCellBorder>{row.aisle}</TableCellBorder>
              <TableCellBorder>{row.rack}</TableCellBorder>
              <TableCellBorder>{row.shelf}</TableCellBorder>
              <TableCellBorder>{row.bin}</TableCellBorder>
              <TableCellBorder>{row.binName}</TableCellBorder>
              <TableCellBorder>{row.lengthCM}</TableCellBorder>
              <TableCellBorder>{row.widthCM}</TableCellBorder>
              <TableCellBorder>{row.heightCM}</TableCellBorder>
              <TableCellBorder colSpan={2}>{row.volumeM3}</TableCellBorder>
              <TableCellBorder colSpan={2}>{row.slp_capacity}</TableCellBorder>
              <TableCellBorder colSpan={2}>{row.max_weight_capacity_kg}</TableCellBorder>
              <TableCellBorder colSpan={2}>{row.sed_capacity_slp}</TableCellBorder>
              <TableCellBorder>{row.sed_capacity_slp_percent}</TableCellBorder>
              <TableCellBorder colSpan={2}>{row.available_capacity_slp}</TableCellBorder>
              <TableCellBorder>{row.available_capacity_slp_percent}</TableCellBorder>
              <TableCellBorder className="text-right">
                <div className="w-full max-w-xs mx-auto">
                  <Select>
                    <SelectTrigger >
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </TableCellBorder>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}