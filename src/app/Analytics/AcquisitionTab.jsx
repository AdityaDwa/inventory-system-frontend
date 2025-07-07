import ConditionPieChart from "./ConditionPieChart.jsx";
import ChartLegendPoint from "./ChartLegendPoint.jsx";
import AcquisitionRowData from "./AcquisitionRowData.jsx";

export default function AcquisitionTab({ hidden }) {
  return (
    <section
      className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4"
      hidden={hidden}
    >
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <header className="flex flex-col space-y-1.5 p-6">
          <div className="text-2xl font-semibold leading-none tracking-tight">
            Acquisition Source
          </div>
          <div className="text-sm text-muted-foreground">
            Distribution of items by purchase or donation
          </div>
        </header>
        <div className="p-6 pt-0">
          <aside className="space-y-8">
            <article
              className="flex flex-col items-center"
              style={{ height: "368px" }}
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
            <article className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <header className="flex flex-col space-y-1.5 p-6">
                <div className="text-2xl font-semibold leading-none tracking-tight">
                  Acquisition by Category
                </div>
                <div className="text-sm text-muted-foreground">
                  Breakdown of purchase vs. donation by category
                </div>
              </header>
              <div className="p-6 pt-0">
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="[&amp;_tr]:border-b">
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th className="h-12 px-4 font-medium text-muted-foreground text-left">
                          Category
                        </th>
                        <th className="h-12 px-4 font-medium text-muted-foreground text-center">
                          Purchase
                        </th>
                        <th className="h-12 px-4 font-medium text-muted-foreground text-center">
                          Donation
                        </th>
                        <th className="h-12 px-4 font-medium text-muted-foreground text-center">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="[&amp;_tr:last-child]:border-0">
                      <AcquisitionRowData />
                      <AcquisitionRowData />
                      <AcquisitionRowData />
                      <AcquisitionRowData />
                      <AcquisitionRowData />
                      <AcquisitionRowData />
                    </tbody>
                  </table>
                </div>
              </div>
            </article>
          </aside>
        </div>
      </div>
    </section>
  );
}
