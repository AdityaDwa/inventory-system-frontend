import PackageIcon from "../../components/icons/PackageIcon.jsx";
import CircleCheckIcon from "../../components/icons/CircleCheckIcon.jsx";
import PenNibIcon from "../../components/icons/PenNibIcon.jsx";
import AlertIcon from "../../components/icons/AlertIcon.jsx";

import OverviewCard from "./OverviewCard.jsx";

export default function OverviewRow({ inventoryStats }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <OverviewCard
        title="Total Items"
        overviewNum={inventoryStats.totalItems}
        overviewInfo={`+${inventoryStats.totalItems - 15} from last month`}
      >
        <PackageIcon cssClass="h-4 w-4 text-primary" />
      </OverviewCard>

      <OverviewCard
        title="Working Items"
        overviewNum={inventoryStats.inUse}
        overviewInfo={`${(
          (inventoryStats.inUse * 100) /
          inventoryStats.totalItems
        ).toFixed(2)}% of total inventory`}
      >
        <CircleCheckIcon />
      </OverviewCard>

      <OverviewCard
        title="Under Repair"
        overviewNum={inventoryStats.underRepair}
        overviewInfo={`${(
          (inventoryStats.underRepair * 100) /
          inventoryStats.totalItems
        ).toFixed(2)}% of total inventory`}
      >
        <PenNibIcon />
      </OverviewCard>

      <OverviewCard
        title="Out of Order"
        overviewNum={inventoryStats.outOfOrder}
        overviewInfo={`${(
          (inventoryStats.outOfOrder * 100) /
          inventoryStats.totalItems
        ).toFixed(2)}% of total inventory`}
      >
        <AlertIcon />
      </OverviewCard>
    </div>
  );
}
