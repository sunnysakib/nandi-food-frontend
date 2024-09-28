import { Card } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts"

const chartData = [
    { house: "Ware House 1", capacity: 50, fill: "var(--color-house)" },
]
const chartConfig = {
    house: {
        label: "Ware House 1",
        color: "hsl(var(--chart-2))",
    },
}
const chartData1 = [
    { house: "Ware House 2", capacity1: 70, fill: "var(--color-house)" },
]
const chartConfig1 = {
    house: {
        label: "Ware House 2",
        color: "hsl(var(--chart-2))",
    },
}
const chartData2 = [
    { house: "Ware House 2", capacity2: 90, fill: "var(--color-house)" },
]
const chartConfig2 = {
    house: {
        label: "Ware House 2",
        color: "hsl(var(--chart-2))",
    },
}

const WarehouseCapacityChart = () => {
    return (
        <Card className="p-8">
            <div className="flex justify-between  items-center">
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
            <div className="flex lg:flex-row justify-center flex-col gap-6 mt-16 pb-6">
                <div className="flex flex-col text-center text-xl gap-3 text-gray-500 justify-center">
                    <ChartContainer
                        config={chartConfig}
                        className=" aspect-square h-[200px]"
                    >
                        <RadialBarChart
                            data={chartData}
                            startAngle={200}
                            endAngle={0}
                            innerRadius={80}
                            outerRadius={150}
                        >
                            <PolarGrid
                                gridType="circle"
                                radialLines={false}
                                stroke="none"
                                className="first:fill-muted last:fill-background"
                                polarRadius={[90, 70]}
                            />
                            <RadialBar dataKey="capacity" background cornerRadius={10} />
                            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                                <Label
                                    content={({ viewBox }) => {
                                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                            return (
                                                <text
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    textAnchor="middle"
                                                    dominantBaseline="middle"
                                                >
                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={viewBox.cy}
                                                        className="fill-foreground text-4xl font-bold"
                                                    >
                                                        {chartData[0].capacity.toLocaleString()}%
                                                    </tspan>
                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={(viewBox.cy || 0) + 24}
                                                        className="fill-muted-foreground"
                                                    >
                                                        Capacity
                                                    </tspan>
                                                </text>
                                            )
                                        }
                                    }}
                                />
                            </PolarRadiusAxis>
                        </RadialBarChart>
                    </ChartContainer>
                    <h1>Ware House 1</h1>
                </div>
                <div className="flex flex-col text-center text-xl gap-3 text-gray-500 justify-center">
                    <ChartContainer
                        config={chartConfig1}
                        className=" aspect-square h-[200px]"
                    >
                        <RadialBarChart
                            data={chartData1}
                            startAngle={280}
                            endAngle={0}
                            innerRadius={80}
                            outerRadius={150}
                        >
                            <PolarGrid
                                gridType="circle"
                                radialLines={false}
                                stroke="none"
                                className="first:fill-muted last:fill-background"
                                polarRadius={[90, 70]}
                            />
                            <RadialBar dataKey="capacity1" background cornerRadius={10} />
                            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                                <Label
                                    content={({ viewBox }) => {
                                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                            return (
                                                <text
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    textAnchor="middle"
                                                    dominantBaseline="middle"
                                                >
                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={viewBox.cy}
                                                        className="fill-foreground text-4xl font-bold"
                                                    >
                                                        {chartData1[0].capacity1.toLocaleString()}%
                                                    </tspan>
                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={(viewBox.cy || 0) + 24}
                                                        className="fill-muted-foreground"
                                                    >
                                                        Capacity
                                                    </tspan>
                                                </text>
                                            )
                                        }
                                    }}
                                />
                            </PolarRadiusAxis>
                        </RadialBarChart>
                    </ChartContainer>
                    <h1>Ware House 2</h1>
                </div>
                <div className="flex flex-col text-center text-xl gap-3 text-gray-500 justify-center">
                    <ChartContainer
                        config={chartConfig2}
                        className=" aspect-square h-[200px]"
                    >
                        <RadialBarChart
                            data={chartData2}
                            startAngle={330}
                            endAngle={0}
                            innerRadius={80}
                            outerRadius={150}
                        >
                            <PolarGrid
                                gridType="circle"
                                radialLines={false}
                                stroke="none"
                                className="first:fill-muted last:fill-background"
                                polarRadius={[90, 70]}
                            />
                            <RadialBar dataKey="capacity2" background cornerRadius={10} />
                            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                                <Label
                                    content={({ viewBox }) => {
                                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                            return (
                                                <text
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    textAnchor="middle"
                                                    dominantBaseline="middle"
                                                >
                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={viewBox.cy}
                                                        className="fill-foreground text-4xl font-bold"
                                                    >
                                                        {chartData2[0].capacity2.toLocaleString()}%
                                                    </tspan>
                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={(viewBox.cy || 0) + 24}
                                                        className="fill-muted-foreground"
                                                    >
                                                        Capacity
                                                    </tspan>
                                                </text>
                                            )
                                        }
                                    }}
                                />
                            </PolarRadiusAxis>
                        </RadialBarChart>
                    </ChartContainer>
                    <h1>Ware House 3</h1>
                </div>
            </div >
        </Card>

    );
};

export default WarehouseCapacityChart;