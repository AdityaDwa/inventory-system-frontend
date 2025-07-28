import { useState, useEffect, useContext } from "react";

import DownloadIcon from "../../components/icons/DownloadIcon.jsx";

import PageHeader from "../../components/PageHeader.jsx";
import AnalyticsCardRow from "./AnalyticsCardRow.jsx";
import AnalyticsMenuBar from "./AnalyticsMenuBar.jsx";
import ItemConditionTab from "./ItemConditionTab.jsx";
import AcquisitionTab from "./AcquisitionTab.jsx";

import { AuthProvider } from "../../store/AuthProvider.jsx";
import getEndpoint from "../../constants/apiEndpoints.js";

export default function Analytics() {
  const [activeTabTitle, setActiveTabTitle] = useState("Condition Breakdown");
  const [inventoryStats, setInventoryStats] = useState({});
  const { accessToken } = useContext(AuthProvider);

  useEffect(() => {
    async function fetchInventoryStatusData() {
      try {
        const fetchUrl = getEndpoint("dashboard", "getInventoryStats");

        const response = await fetch(fetchUrl, {
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

  function handleTabChange(title) {
    setActiveTabTitle(title);
  }

  return (
    <>
      <PageHeader title="Analytics">
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
        <ItemConditionTab
          hidden={activeTabTitle !== "Condition Breakdown"}
          inventoryStats={inventoryStats}
        />
        <AcquisitionTab hidden={activeTabTitle !== "Acquisition Source"} />
      </section>
    </>
  );
}
