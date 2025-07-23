import OverviewChart from "../../components/OverviewChart.jsx";
import ConditionPieChart from "../Analytics/ConditionPieChart.jsx";
import ChartLegendPoint from "../Analytics/ChartLegendPoint.jsx";

import { overviewConfig } from "../../constants/tableConfig.js";

export default function InventoryOverview({ inventoryStats }) {
  return (
    <article className="rounded-lg border bg-card text-card-foreground shadow-sm col-span-4">
      <header className="flex flex-col space-y-1.5 p-6 bg-primary/5 mb-4 rounded-t-lg">
        <div className="text-2xl font-semibold leading-none tracking-tight">
          Inventory Overview
        </div>
      </header>
      <div className="p-6 py-0 pl-2" style={{ height: "275px" }}>
        <ConditionPieChart
          chartData={[
            {
              name: "Working",
              value:
                inventoryStats[overviewConfig.responseMapping.workingItems],
              color: "#4ade80",
            },
            {
              name: "Repairable",
              value:
                inventoryStats[overviewConfig.responseMapping.repairableItems],
              color: "#facc15",
            },
            {
              name: "Not-working",
              value:
                inventoryStats[overviewConfig.responseMapping.notWorkingItems],
              color: "#f87171",
            },
          ]}
        />
      </div>
      <aside className="grid grid-cols-3 gap-4 w-full max-w-md mx-auto mt-0 mb-4">
        <ChartLegendPoint
          title="Working"
          count={inventoryStats[overviewConfig.responseMapping.workingItems]}
          backgroundColor="rgb(74, 222, 128)"
        />

        <ChartLegendPoint
          title="Repairable"
          count={inventoryStats[overviewConfig.responseMapping.repairableItems]}
          backgroundColor="rgb(250, 204, 21)"
        />
        <ChartLegendPoint
          title="Not-working"
          count={inventoryStats[overviewConfig.responseMapping.notWorkingItems]}
          backgroundColor="rgb(248, 113, 113)"
        />
      </aside>
    </article>
  );
}
