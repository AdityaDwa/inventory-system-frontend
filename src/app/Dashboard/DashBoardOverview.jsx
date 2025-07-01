import OverviewCard from "./OverviewCard.jsx";
import ActivityLog from "./ActivityLog.jsx";

import PackageIcon from "../../components/icons/PackageIcon.jsx";
import CircleCheckIcon from "../../components/icons/CircleCheckIcon.jsx";
import PenNibIcon from "../../components/icons/PenNibIcon.jsx";
import AlertIcon from "../../components/icons/AlertIcon.jsx";

export default function DashBoardOverview({ hidden }) {
  return (
    <section
      className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4"
      hidden={hidden}
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" hidden={hidden}>
        <OverviewCard
          title="Total Items"
          overviewNum="10"
          overviewInfo="+12 from last month"
        >
          <PackageIcon cssClass="h-4 w-4 text-primary" />
        </OverviewCard>

        <OverviewCard
          title="Working Items"
          overviewNum="7"
          overviewInfo="70% of total inventory"
        >
          <CircleCheckIcon />
        </OverviewCard>

        <OverviewCard
          title="Repairable Items"
          overviewNum="2"
          overviewInfo="20% of total inventory"
        >
          <PenNibIcon />
        </OverviewCard>

        <OverviewCard
          title="Out of Order"
          overviewNum="1"
          overviewInfo="10% of total inventory"
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
          <div className="p-6 pt-0 pl-2">
            <div
              className="recharts-responsive-container"
              style={{ width: "100%", height: "350px", minWidth: "0px" }}
            >
              <div
                className="recharts-wrapper"
                style={{
                  position: "relative",
                  cursor: "default",
                  width: "100%",
                  height: "100%",
                  maxHeight: "350px",
                  maxWidth: "646px",
                }}
              >
                <div
                  tabIndex={-1}
                  className="recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-bottom"
                  style={{
                    visibility: "hidden",
                    pointerEvents: "none",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    transform: "translate(363px, 55.02px)",
                  }}
                >
                  <div
                    className="recharts-default-tooltip"
                    style={{
                      margin: "0px",
                      padding: "10px",
                      backgroundColor: "rgb(255, 255, 255)",
                      border: "1px solid rgb(204, 204, 204)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <p
                      className="recharts-tooltip-label"
                      style={{ margin: "0px" }}
                    >
                      DoECE
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
              <ActivityLog
                profileInitials="JD"
                userName="John Doe"
                action="added"
                item="Dell XPS 15 Laptop"
                faculty="Computer Science"
                timeElapsed="2 hours ago"
              />

              <ActivityLog
                profileInitials="JS"
                userName="Jane Smith"
                action="updated status of"
                item="Projector P3000"
                faculty="Engineering"
                timeElapsed="3 hours ago"
              />

              <ActivityLog
                profileInitials="MJ"
                userName="Mike Johnson"
                action="moved"
                item="Office Chair"
                faculty="Business to Arts"
                timeElapsed="5 hours ago"
              />

              <ActivityLog
                profileInitials="SW"
                userName="Sarah Williams"
                action="marked as repairable"
                item="HP Printer"
                faculty="Administration"
                timeElapsed="Yesterday"
              />

              <ActivityLog
                profileInitials="RB"
                userName="Robert Brown"
                action="added"
                item="Microscope M200"
                faculty="Science"
                timeElapsed="Yesterday"
              />
            </div>
          </section>
        </article>
      </div>
    </section>
  );
}
