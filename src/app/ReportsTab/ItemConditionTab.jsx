import ConditionPieChart from "./ConditionPieChart.jsx";
import ChartLegendPoint from "./ChartLegendPoint.jsx";

export default function ItemConditionTab({ hidden }) {
  return (
    <section
      className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4"
      hidden={hidden}
    >
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <header className="flex flex-col space-y-1.5 p-6">
          <div className="text-2xl font-semibold leading-none tracking-tight">
            Item Condition Breakdown
          </div>
          <div className="text-sm text-muted-foreground">
            Status of items across all departments
          </div>
        </header>
        <div className="p-6 pt-0">
          <article
            className="flex flex-col items-center"
            style={{ height: "368px" }}
          >
            <ConditionPieChart
              chartData={[
                { name: "Working", value: 7, color: "#4ade80" },
                { name: "Repairable", value: 2, color: "#facc15" },
                { name: "Out of Order", value: 1, color: "#f87171" },
              ]}
            />
            <aside className="grid grid-cols-3 gap-4 w-full max-w-md mt-4">
              <ChartLegendPoint
                title="Working"
                count={7}
                backgroundColor="rgb(74, 222, 128)"
              />

              <ChartLegendPoint
                title="Repairable"
                count={2}
                backgroundColor="rgb(250, 204, 21)"
              />
              <ChartLegendPoint
                title="Out of Order"
                count={1}
                backgroundColor="rgb(248, 113, 113)"
              />
            </aside>
          </article>
        </div>
      </div>
    </section>
  );
}
