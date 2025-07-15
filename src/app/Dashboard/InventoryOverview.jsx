import OverviewChart from "../../components/OverviewChart.jsx";
import ConditionPieChart from "../Analytics/ConditionPieChart.jsx";
import ChartLegendPoint from "../Analytics/ChartLegendPoint.jsx";

export default function InventoryOverview({ inventoryStats }) {
  return (
    <article className="rounded-lg border bg-card text-card-foreground shadow-sm col-span-4">
      <header className="flex flex-col space-y-1.5 p-6 bg-primary/5 mb-4 rounded-t-lg">
        <div className="text-2xl font-semibold leading-none tracking-tight">
          Inventory Overview
        </div>
      </header>
      <div className="p-6 pt-0 pl-2" style={{ height: "275px" }}>
        <ConditionPieChart
          chartData={[
            {
              name: "Working",
              value: inventoryStats.inUse,
              color: "#4ade80",
            },
            {
              name: "Under Repair",
              value: inventoryStats.underRepair,
              color: "#facc15",
            },
            {
              name: "Out of Order",
              value: inventoryStats.outOfOrder,
              color: "#f87171",
            },
          ]}
        />
        <aside className="grid grid-cols-3 gap-4 w-full max-w-md mx-auto mt-4">
          <ChartLegendPoint
            title="Working"
            count={inventoryStats.inUse}
            backgroundColor="rgb(74, 222, 128)"
          />

          <ChartLegendPoint
            title="Under Repair"
            count={inventoryStats.underRepair}
            backgroundColor="rgb(250, 204, 21)"
          />
          <ChartLegendPoint
            title="Out of Order"
            count={inventoryStats.outOfOrder}
            backgroundColor="rgb(248, 113, 113)"
          />
        </aside>
      </div>
    </article>
  );
}
