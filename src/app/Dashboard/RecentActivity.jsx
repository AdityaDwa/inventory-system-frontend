import { useState, useEffect, useContext } from "react";

import LogData from "../../components/LogData.jsx";

import { AuthProvider } from "../../store/AuthProvider.jsx";

import { dateFormatter } from "../../utils/formatter.js";

export default function RecentActivity() {
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
          {logData.length !== 0
            ? logData
                .slice(0, 5)
                .map((singleLog, index) => (
                  <LogData
                    key={index}
                    profileInitials={singleLog.performedByName[0].toUpperCase()}
                    userName={singleLog.performedByName}
                    action={singleLog.action.toLowerCase()}
                    item={singleLog.itemName}
                    faculty={singleLog.toRoomName}
                    timeElapsed={dateFormatter(singleLog.createdAt)}
                  />
                ))
            : ""}
        </div>
      </section>
    </article>
  );
}
