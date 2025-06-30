import ActivityLog from "./ActivityLog.jsx";

export default function DashBoardActivity({ hidden }) {
  return (
    <section
      className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4"
      hidden={hidden}
    >
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

            <ActivityLog
              profileInitials="ED"
              userName="Emily Davis"
              action="deleted"
              item="Broken Desk"
              faculty="Facilities"
              timeElapsed="2 days ago"
            />

            <ActivityLog
              profileInitials="DW"
              userName="David Wilson"
              action="updated details of"
              item="Smart Board"
              faculty="Education"
              timeElapsed="2 days ago"
            />

            <ActivityLog
              profileInitials="LT"
              userName="Lisa Taylor"
              action="marked as out of order"
              item="Air Conditioner"
              faculty="Facilities"
              timeElapsed="3 days ago"
            />

            <ActivityLog
              profileInitials="JA"
              userName="James Anderson"
              action="added"
              item="Chemistry Lab Equipment"
              faculty="Science"
              timeElapsed="4 days ago"
            />

            <ActivityLog
              profileInitials="PM"
              userName="Patricia Moore"
              action="updated location of"
              item="Conference Table"
              faculty="Administration"
              timeElapsed="5 days ago"
            />
          </div>
        </section>
      </div>
    </section>
  );
}
