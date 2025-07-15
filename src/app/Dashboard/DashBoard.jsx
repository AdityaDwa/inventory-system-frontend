import { useState, useEffect, useContext } from "react";

import PageHeader from "../../components/PageHeader.jsx";
import OverviewRow from "./OverviewRow.jsx";
import InventoryOverview from "./InventoryOverview.jsx";
import RecentActivity from "./RecentActivity.jsx";

import { AuthProvider } from "../../store/AuthProvider.jsx";

export default function DashBoard() {
  const [inventoryStats, setInventoryStats] = useState({
    inUse: 0,
    underRepair: 0,
    outOfOrder: 0,
    totalItems: 0,
  });
  const { accessToken } = useContext(AuthProvider);

  useEffect(() => {
    async function fetchInventoryStatusData() {
      try {
        const response = await fetch("/api/v1/items/inventoryStats", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const responseBody = await response.json();
          setInventoryStats(responseBody.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchInventoryStatusData();
  }, []);

  return (
    <>
      <PageHeader title="Dashboard" />
      <section className="space-y-4">
        <section className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4">
          <OverviewRow inventoryStats={inventoryStats} />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <InventoryOverview inventoryStats={inventoryStats} />
            <RecentActivity />
          </div>
        </section>
      </section>
    </>
  );
}
