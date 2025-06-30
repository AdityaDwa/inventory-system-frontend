import ProgressBar from "../../components/ProgressBar.jsx";

export default function DashboardDepartment({ hidden }) {
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
            <div className="text-sm text-muted-foreground">10 total items</div>
          </header>
          <div className="p-6 pt-0">
            <div className="space-y-2">
              <ProgressBar title="Working" percentage={70} />
              <ProgressBar title="Repairable" percentage={20} />
              <ProgressBar title="Out of Order" percentage={10} />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
