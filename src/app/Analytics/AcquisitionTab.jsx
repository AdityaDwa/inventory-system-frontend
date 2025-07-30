import TableFilter from "../../components/TableFilter.jsx";
import ConditionPieChart from "./ConditionPieChart.jsx";
import ChartLegendPoint from "./ChartLegendPoint.jsx";

export default function AcquisitionTab({ hidden }) {
  return (
    <section
      className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4"
      hidden={hidden}
    >
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <header className="flex justify-between items-center space-y-1.5 p-6">
          <div className="flex flex-col">
            <div className="text-2xl font-semibold leading-none tracking-tight">
              Acquisition Source
            </div>
            <div className="text-sm text-muted-foreground">
              Distribution of items by purchase or donation
            </div>
          </div>
          <TableFilter
            dropdownInitialValue="All categories"
            dropdownConfigKey="category"
            isInitialValueAnOption={true}
            // onStateChange={handleDropdownChange}
            widthSize="230px"
          />
        </header>
        <div className="p-6 pt-0">
          <aside className="space-y-8">
            <article
              className="flex flex-col items-center"
              style={{ height: "280px" }}
            >
              <ConditionPieChart
                chartData={[
                  { name: "Purchase", value: 9, color: "#3b82f6" },
                  { name: "Donation", value: 1, color: "#8b5cf6" },
                ]}
              />
              <aside className="grid grid-cols-2 gap-8 w-full max-w-md mt-4">
                <ChartLegendPoint
                  title="Purchase"
                  count={9}
                  backgroundColor="rgb(59, 130, 246)"
                />

                <ChartLegendPoint
                  title="Donation"
                  count={1}
                  backgroundColor="rgb(139, 92, 246)"
                />
              </aside>
            </article>
          </aside>
        </div>
      </div>
    </section>
  );
}
