import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
const chartData = [
    { category: "Finished Products", amount: 700000, fill: "var(--color-products)" },
    { category: "Service Parts", amount: 200000, fill: "var(--color-service_Parts)" },
    { category: "WIP", amount: 487000, fill: "var(--color-wip)" },
    { category: "Raw Metarials", amount: 173000, fill: "var(--color-raw_Metarials)" },
    { category: "Supplies", amount: 90000, fill: "var(--color-supplies)" },
]

const chartConfig = {
    visitors: {
        label: "Amount",
    },
    products: {
        label: "Finished Products",
        color: "hsl(var(--chart-5))",
    },
    service_Parts: {
        label: "Service Parts",
        color: "hsl(var(--chart-1))",
    },
    wip: {
        label: "WIP",
        color: "hsl(var(--chart-2))",
    },
    raw_Metarials: {
        label: "Raw Metarials",
        color: "hsl(var(--chart-3))",
    },
    supplies: {
        label: "Supplies",
        color: "hsl(var(--chart-4))",
    },

}
const InventoryChartCard = () => {
    return (
        <Card className="p-8">
        <div className="flex justify-between items-center">
          <h1 className="text-[1.12rem] ">Inventory Value by Category</h1>
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
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
                <BarChart
                    accessibilityLayer
                    data={chartData}
                    layout="horizontal"
                    margin={{
                        left: 0,
                    }}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="category"
                        type="category"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}

                    />
                    <YAxis tickLine={false} ticks={[0, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000]} axisLine={false} />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent />}

                    />
                    <ChartLegend content={<ChartLegendContent />} labelKey="category" />

                    <Bar dataKey="amount" layout="horizontal" radius={1} />
                </BarChart>
            </ChartContainer>
        </div>
      </Card>
       
    );
};

export default InventoryChartCard;