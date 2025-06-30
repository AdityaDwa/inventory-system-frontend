export default function OverviewCard({
  title,
  overviewNum,
  overviewInfo,
  children,
}) {
  return (
    <article className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <header className="p-6 flex flex-row items-center justify-between space-y-0 pb-2 mb-2 bg-primary/5 rounded-t-lg">
        <div className="tracking-tight text-sm font-medium">{title}</div>
        {children}
      </header>
      <div className="p-6 pt-0">
        <div className="text-2xl font-bold">{overviewNum}</div>
        <p className="text-xs text-muted-foreground">{overviewInfo}</p>
      </div>
    </article>
  );
}
