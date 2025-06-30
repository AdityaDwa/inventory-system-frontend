export default function ActivityLog({
  profileInitials,
  userName,
  action,
  item,
  faculty,
  timeElapsed,
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
        <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
          {profileInitials}
        </span>
      </span>
      <div className="space-y-1">
        <p className="text-sm font-medium leading-none">
          {userName} <span className="text-muted-foreground">{action} </span>
          <span className="font-semibold">{item}</span>
        </p>
        <p className="text-sm text-muted-foreground">
          In {faculty} • {timeElapsed}
        </p>
      </div>
    </div>
  );
}
