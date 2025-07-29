import { Link } from "react-router-dom";

import DownloadIcon from "../../components/icons/DownloadIcon.jsx";
import PlusIcon from "../../components/icons/PlusIcon.jsx";

import PageHeader from "../../components/PageHeader.jsx";
import Table from "../../components/Table.jsx";

export default function Inventory() {
  return (
    <>
      <PageHeader title="Inventory">
        <div className="flex items-center gap-2">
          {/* <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            <DownloadIcon />
            Export
          </button> */}
          <Link
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            to="/inventory/add-item"
          >
            <PlusIcon cssClass="mr-2 h-4 w-4" />
            Add Item
          </Link>
        </div>
      </PageHeader>
      <Table configKey="item" />
    </>
  );
}
