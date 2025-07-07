import { useState, useEffect, useContext } from "react";

import DownloadIcon from "../../components/icons/DownloadIcon.jsx";

import PageHeader from "../../components/PageHeader.jsx";
import AnalyticsCardRow from "./AnalyticsCardRow.jsx";
import AnalyticsMenuBar from "./AnalyticsMenuBar.jsx";
import CategoriesDistribution from "./CategoriesDistribution.jsx";
import ItemConditionTab from "./ItemConditionTab.jsx";
import AcquisitionTab from "./AcquisitionTab.jsx";

import { AuthProvider } from "../../store/AuthProvider.jsx";

export default function Analytics() {
  const [activeTabTitle, setActiveTabTitle] = useState("Category-wise");
  const [inventoryStats, setInventoryStats] = useState({
    inUse: 0,
    underRepair: 0,
    outOfOrder: 0,
    totalItems: 0,
  });
  const { accessToken } = useContext(AuthProvider);

  useEffect(() => {
    async function fetchInventoryData() {
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

    fetchInventoryData();
  }, []);

  function handleTabChange(title) {
    setActiveTabTitle(title);
  }

  return (
    <>
      <PageHeader title="Analytics">
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
          <DownloadIcon />
          Export
        </button>
      </PageHeader>

      <AnalyticsCardRow inventoryStats={inventoryStats} />

      <section className="space-y-4">
        <AnalyticsMenuBar
          activeTabTitle={activeTabTitle}
          handleTabChange={handleTabChange}
        />
        <CategoriesDistribution hidden={activeTabTitle !== "Category-wise"} />
        <ItemConditionTab
          hidden={activeTabTitle !== "Condition Breakdown"}
          inventoryStats={inventoryStats}
        />
        <AcquisitionTab hidden={activeTabTitle !== "Acquisition Source"} />
      </section>
    </>
  );
}
