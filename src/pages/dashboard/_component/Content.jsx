
import WarehouseCapacityChart from "./WarehouseCapacityChart";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import InventoryChartCard from "./InventoryChartCard";
import SalesbyCategoryChart from "./SalesbyCategoryChart";
import SalesbyWarehouseChart from "./SalesbyWarehouseChart";
import Top10ProductsTable from "./Top10ProductsTable";
import Top10CustomerTable from "./Top10CustomerTable";

Chart.register(CategoryScale);

const Content = () => {
  return (
    <div className="lg:grid grid-cols-2 gap-7 flex flex-col mt-6">
      <InventoryChartCard/>
      <WarehouseCapacityChart/>
      <SalesbyCategoryChart/>
      <SalesbyWarehouseChart/>
      <Top10ProductsTable/>
      <Top10CustomerTable/>
    </div>
  );
};

export default Content;