import { useState, useEffect, useContext } from "react";

import OverviewCard from "./OverviewCard.jsx";
import ActivityLog from "./ActivityLog.jsx";

import PackageIcon from "../../components/icons/PackageIcon.jsx";
import CircleCheckIcon from "../../components/icons/CircleCheckIcon.jsx";
import PenNibIcon from "../../components/icons/PenNibIcon.jsx";
import AlertIcon from "../../components/icons/AlertIcon.jsx";
import OverviewChart from "../../components/OverviewChart.jsx";

import { AuthProvider } from "../../store/AuthProvider.jsx";

export default function DashBoardOverview({ hidden }) {
  const [inventoryItemStats, setInventoryItemStats] = useState({
    inUse: 0,
    underRepair: 0,
    outOfOrder: 0,
    totalItems: 0,
  });

  const [logData, setLogData] = useState(null);

  const { accessToken } = useContext(AuthProvider);

  useEffect(() => {
    async function fetchActivityData() {
      try {
        const response = await fetch("api/v1/items/overallLogs", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const responseBody = await response.json();
          setLogData(responseBody.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchActivityData();
  }, []);

  useEffect(() => {
    async function fetchItemData() {
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

    fetchItemData();
  }, []);

  return (
    <section
      className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4"
      hidden={hidden}
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <OverviewCard
          title="Total Items"
          overviewNum={inventoryItemStats.totalItems}
          overviewInfo={`+${
            inventoryItemStats.totalItems - 15
          } from last month`}
        >
          <PackageIcon cssClass="h-4 w-4 text-primary" />
        </OverviewCard>

        <OverviewCard
          title="Working Items"
          overviewNum={inventoryItemStats.inUse}
          overviewInfo={`${(
            (inventoryItemStats.inUse * 100) /
            inventoryItemStats.totalItems
          ).toFixed(2)}% of total inventory`}
        >
          <CircleCheckIcon />
        </OverviewCard>

        <OverviewCard
          title="Repairable Items"
          overviewNum={inventoryItemStats.underRepair}
          overviewInfo={`${(
            (inventoryItemStats.underRepair * 100) /
            inventoryItemStats.totalItems
          ).toFixed(2)}% of total inventory`}
        >
          <PenNibIcon />
        </OverviewCard>

        <OverviewCard
          title="Out of Order"
          overviewNum={inventoryItemStats.outOfOrder}
          overviewInfo={`${(
            (inventoryItemStats.outOfOrder * 100) /
            inventoryItemStats.totalItems
          ).toFixed(2)}% of total inventory`}
        >
          <AlertIcon />
        </OverviewCard>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
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
                  Working: inventoryItemStats.inUse,
                  Repairable: inventoryItemStats.underRepair,
                  "Out of Order": inventoryItemStats.outOfOrder,
                },
              ]}
              showLegend={false}
            />
          </div>
        </article>

        <article className="rounded-lg border bg-card text-card-foreground shadow-sm col-span-3">
          <header className="flex flex-col space-y-1.5 p-6 bg-primary/5 mb-4 rounded-t-lg">
            <div className="text-2xl font-semibold leading-none tracking-tight">
              Recent Activity
            </div>
            <div className="text-sm text-muted-foreground">
              Latest 5 activities in the system
            </div>
          </header>
          <section className="p-6 pt-0">
            <div className="space-y-6">
              {logData
                ? logData.slice(0, 5).map((singleLog, index) => {
                    const date = new Date(singleLog.createdAt);
                    const options = {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    };
                    const formattedDate = date.toLocaleDateString(
                      "en-US",
                      options
                    );
                    return (
                      <ActivityLog
                        key={index}
                        profileInitials={singleLog.performedByName[0].toUpperCase()}
                        userName={singleLog.performedByName}
                        action={singleLog.action.toLowerCase()}
                        item={singleLog.itemName}
                        faculty={singleLog.toRoomName}
                        timeElapsed={formattedDate}
                      />
                    );
                  })
                : ""}
            </div>
          </section>
        </article>
      </div>
    </section>
  );
}
