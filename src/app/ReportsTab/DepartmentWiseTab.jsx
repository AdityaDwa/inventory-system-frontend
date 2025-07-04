import OverviewChart from "../../components/OverviewChart.jsx";

import { CHART_DATA } from "../../utils/data.js";

export default function DepartmentWiseTab({ hidden }) {
  return (
    <section
      className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4"
      hidden={hidden}
    >
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <header className="flex flex-col space-y-1.5 p-6">
          <div className="text-2xl font-semibold leading-none tracking-tight">
            Department-wise Inventory
          </div>
          <div className="text-sm text-muted-foreground">
            Breakdown of inventory items by department
          </div>
        </header>
        <div className="p-6 pt-0 pl-2" style={{ height: "424px" }}>
          <OverviewChart chartData={CHART_DATA} showLegend={true} />
        </div>
      </div>
    </section>
  );
}
