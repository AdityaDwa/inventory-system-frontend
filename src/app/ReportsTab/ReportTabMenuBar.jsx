import BarGraphIcon from "../../components/icons/BarGraphIcon.jsx";
import PieChartIcon from "../../components/icons/PieChartIcon.jsx";
import TextFileIcon from "../../components/icons/TextFileIcon.jsx";
import ReportTabButton from "./ReportTabButton.jsx";

export default function ReportTabMenuBar({ activeTabTitle, handleTabChange }) {
  return (
    <aside className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
      <ReportTabButton
        title="Department-wise"
        activeTabTitle={activeTabTitle}
        onTabChange={handleTabChange}
      >
        <BarGraphIcon />
        Department-wise
      </ReportTabButton>

      <ReportTabButton
        title="Condition Breakdown"
        activeTabTitle={activeTabTitle}
        onTabChange={handleTabChange}
      >
        <PieChartIcon />
        Condition Breakdown
      </ReportTabButton>

      <ReportTabButton
        title="Acquisition Source"
        activeTabTitle={activeTabTitle}
        onTabChange={handleTabChange}
      >
        <TextFileIcon cssClass="h-4 w-4" />
        Acquisition Source
      </ReportTabButton>
    </aside>
  );
}
