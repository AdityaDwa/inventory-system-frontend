import { useState, useEffect, useContext } from "react";

import ProgressBar from "../../components/ProgressBar.jsx";

import { AuthProvider } from "../../store/AuthProvider.jsx";

export default function DashboardDepartment({ hidden }) {
  const [inventoryItemStats, setInventoryItemStats] = useState({
    inUse: 0,
    underRepair: 0,
    outOfOrder: 0,
    totalItems: 0,
  });

  const { accessToken } = useContext(AuthProvider);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("api/v1/items/inventoryStats", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const responseBody = await response.json();
          setInventoryItemStats(responseBody.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <section
      className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4"
      hidden={hidden}
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <article className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <header className="flex flex-col space-y-1.5 p-6 pb-2">
            <div className="text-2xl font-semibold leading-none tracking-tight">
              DoECE
            </div>
            <div className="text-sm text-muted-foreground">
              {inventoryItemStats.totalItems} total items
            </div>
          </header>
          <div className="p-6 pt-0">
            <div className="space-y-2">
              <ProgressBar
                title="Working"
                percentage={(
                  (inventoryItemStats.inUse * 100) /
                  inventoryItemStats.totalItems
                ).toFixed(2)}
              />
              <ProgressBar
                title="Repairable"
                percentage={(
                  (inventoryItemStats.underRepair * 100) /
                  inventoryItemStats.totalItems
                ).toFixed(2)}
              />
              <ProgressBar
                title="Out of Order"
                percentage={(
                  (inventoryItemStats.outOfOrder * 100) /
                  inventoryItemStats.totalItems
                ).toFixed(2)}
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
