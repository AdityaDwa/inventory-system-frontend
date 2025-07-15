import { useState, useEffect, useContext } from "react";

import LogData from "../../components/LogData.jsx";

import { AuthProvider } from "../../store/AuthProvider.jsx";

import { dateFormatter } from "../../utils/formatter.js";

export default function ActivityLog() {
  const [logData, setLogData] = useState([]);
  const { accessToken } = useContext(AuthProvider);

  useEffect(() => {
    async function fetchActivityData() {
      try {
        const response = await fetch("/api/v1/items/overallLogs", {
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

  return (
    <section className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <header className="flex flex-col space-y-1.5 p-6">
          <div className="text-2xl font-semibold leading-none tracking-tight">
            Activity Log
          </div>
          <div className="text-sm text-muted-foreground">
            Recent activities across the system
          </div>
        </header>
        <section className="p-6 pt-0">
          <div className="space-y-6">
            {logData
              ? logData.map((singleLog, index) => {
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
                    <LogData
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
      </div>
    </section>
  );
}
