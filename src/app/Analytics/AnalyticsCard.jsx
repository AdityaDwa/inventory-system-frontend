import TextFileIcon from "../../components/icons/TextFileIcon.jsx";

export default function AnalyticsCard({ title, cardValue }) {
  return (
    <article className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="tracking-tight text-sm font-medium">{title}</div>
        <TextFileIcon cssClass="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="p-6 pt-0">
        <div className="flex items-baseline gap-2 text-2xl font-bold">
          {cardValue}
        </div>
      </div>
    </article>
  );
}
