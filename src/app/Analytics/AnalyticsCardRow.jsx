import AnalyticsCard from "./AnalyticsCard.jsx";

export default function AnalyticsCardRow({ inventoryStats }) {
  return (
    <aside className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <AnalyticsCard
        title="Total Items"
        cardValue={inventoryStats.totalItems}
      />
      <AnalyticsCard title="Total Value" cardValue="498,891" />
      <AnalyticsCard
        title="Working Items"
        cardValue={
          <>
            {inventoryStats.inUse}
            <span className="text-sm font-light text-muted-foreground">
              (
              {(
                (inventoryStats.inUse * 100) /
                inventoryStats.totalItems
              ).toFixed(2)}
              %)
            </span>
          </>
        }
      />
      <AnalyticsCard
        title="Needs Attention"
        cardValue={
          <>
            3
            <span className="text-sm font-light text-muted-foreground">
              (
              {(
                (inventoryStats.outOfOrder * 100) /
                inventoryStats.totalItems
              ).toFixed(2)}
              %)
            </span>
          </>
        }
      />
    </aside>
  );
}
