export default function ProgressBar({ title, percentage }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <div>{title}</div>
        <div className="font-medium">{percentage}%</div>
      </div>
      <div className="relative w-full overflow-hidden rounded-full h-1.5 bg-muted">
        <div
          className="h-full w-full flex-1 bg-primary transition-all"
          style={{ transform: `translateX(-${100 - percentage}%)` }}
        ></div>
      </div>
    </div>
  );
}
