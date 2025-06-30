import TabButton from "./TabButton.jsx";

export default function DashBoardTabs() {
  return (
    <div className="space-y-4">
      <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
        <TabButton title="Overview" isActive={true} />
        <TabButton title="Departments" isActive={false} />
        <TabButton title="Activity" isActive={false} />
      </div>
    </div>
  );
}
