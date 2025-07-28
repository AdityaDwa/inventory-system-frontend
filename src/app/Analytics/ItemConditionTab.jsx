import TableFilter from "../../components/TableFilter.jsx";
import ConditionPieChart from "./ConditionPieChart.jsx";
import ChartLegendPoint from "./ChartLegendPoint.jsx";

import { overviewConfig } from "../../constants/tableConfig.js";

export default function ItemConditionTab({ hidden, inventoryStats }) {
  return (
    <section
      className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4"
      hidden={hidden}
    >
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <header className="flex justify-between items-center space-y-1.5 p-6">
          <div className="flex flex-col">
            <div className="text-2xl font-semibold leading-none tracking-tight">
              Item Condition Breakdown
            </div>
            <div className="text-sm text-muted-foreground">
              Current status of items across the department
            </div>
          </div>
          <TableFilter
            dropdownInitialValue="All categories"
            dropdownConfigKey="category"
            // onStateChange={handleDropdownChange}
            widthSize="230px"
          />
        </header>
        <div className="p-6 pt-0">
          <article
            className="flex flex-col items-center"
            style={{ height: "280px" }}
          >
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
                    inventoryStats[
                      overviewConfig.responseMapping.repairableItems
                    ],
                  color: "#facc15",
                },
                {
                  name: "Not-working",
                  value:
                    inventoryStats[
                      overviewConfig.responseMapping.notWorkingItems
                    ],
                  color: "#f87171",
                },
              ]}
            />
            <aside className="grid grid-cols-3 gap-4 w-full max-w-md mt-4">
              <ChartLegendPoint
                title="Working"
                count={
                  inventoryStats[overviewConfig.responseMapping.workingItems]
                }
                backgroundColor="rgb(74, 222, 128)"
              />

              <ChartLegendPoint
                title="Repairable"
                count={
                  inventoryStats[overviewConfig.responseMapping.repairableItems]
                }
                backgroundColor="rgb(250, 204, 21)"
              />
              <ChartLegendPoint
                title="Not-working"
                count={
                  inventoryStats[overviewConfig.responseMapping.notWorkingItems]
                }
                backgroundColor="rgb(248, 113, 113)"
              />
            </aside>
          </article>
        </div>
      </div>
    </section>
  );
}
