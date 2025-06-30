import TabButton from "./TabButton.jsx";

export default function DashBoardTabs({ activeTabTitle, handleTabChange }) {
  return (
    <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
      <TabButton
        title="Overview"
        activeTabTitle={activeTabTitle}
        handleTabChange={handleTabChange}
      />
      <TabButton
        title="Departments"
        activeTabTitle={activeTabTitle}
        handleTabChange={handleTabChange}
      />
      <TabButton
        title="Activity"
        activeTabTitle={activeTabTitle}
        handleTabChange={handleTabChange}
      />
    </div>
  );
}
