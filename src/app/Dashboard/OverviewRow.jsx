import PackageIcon from "../../components/icons/PackageIcon.jsx";
import CircleCheckIcon from "../../components/icons/CircleCheckIcon.jsx";
import PenNibIcon from "../../components/icons/PenNibIcon.jsx";
import AlertIcon from "../../components/icons/AlertIcon.jsx";

import OverviewCard from "./OverviewCard.jsx";

import { overviewConfig } from "../../constants/tableConfig.js";

export default function OverviewRow({ inventoryStats }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <OverviewCard
        title="Total Items"
        overviewNum={inventoryStats[overviewConfig.responseMapping.totalItems]}
        overviewInfo={`${
          inventoryStats[overviewConfig.responseMapping.totalItems] -
            inventoryStats[
              overviewConfig.responseMapping.totalItemsTillLastMonth
            ] >=
          0
            ? "+"
            : ""
        }${
          inventoryStats[overviewConfig.responseMapping.totalItems] -
          inventoryStats[overviewConfig.responseMapping.totalItemsTillLastMonth]
        } from last month`}
      >
        <PackageIcon cssClass="h-4 w-4 text-primary" />
      </OverviewCard>

      <OverviewCard
        title="Working Items"
        overviewNum={
          inventoryStats[overviewConfig.responseMapping.workingItems]
        }
        overviewInfo={`${(
          (inventoryStats[overviewConfig.responseMapping.workingItems] * 100) /
          inventoryStats[overviewConfig.responseMapping.totalItems]
        ).toFixed(2)}% of total inventory`}
      >
        <CircleCheckIcon />
      </OverviewCard>

      <OverviewCard
        title="Under Repair"
        overviewNum={
          inventoryStats[overviewConfig.responseMapping.repairableItems]
        }
        overviewInfo={`${(
          (inventoryStats[overviewConfig.responseMapping.repairableItems] *
            100) /
          inventoryStats[overviewConfig.responseMapping.totalItems]
        ).toFixed(2)}% of total inventory`}
      >
        <PenNibIcon />
      </OverviewCard>

      <OverviewCard
        title="Out of Order"
        overviewNum={
          inventoryStats[overviewConfig.responseMapping.notWorkingItems]
        }
        overviewInfo={`${(
          (inventoryStats[overviewConfig.responseMapping.notWorkingItems] *
            100) /
          inventoryStats[overviewConfig.responseMapping.totalItems]
        ).toFixed(2)}% of total inventory`}
      >
        <AlertIcon />
      </OverviewCard>
    </div>
  );
}
