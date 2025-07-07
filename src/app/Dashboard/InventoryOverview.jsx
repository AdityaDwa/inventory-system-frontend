import OverviewChart from "../../components/OverviewChart.jsx";

export default function InventoryOverview({ inventoryStats }) {
  return (
    <article className="rounded-lg border bg-card text-card-foreground shadow-sm col-span-4">
      <header className="flex flex-col space-y-1.5 p-6 bg-primary/5 mb-4 rounded-t-lg">
        <div className="text-2xl font-semibold leading-none tracking-tight">
          Inventory Overview
        </div>
      </header>
      <div className="p-6 pt-0 pl-2" style={{ height: "374px" }}>
        <OverviewChart
          chartData={[
            {
              name: "DoECE",
              Working: inventoryStats.inUse,
              "Under Repair": inventoryStats.underRepair,
              "Out of Order": inventoryStats.outOfOrder,
            },
          ]}
          showLegend={false}
        />
      </div>
    </article>
  );
}
