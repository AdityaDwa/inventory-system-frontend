import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import DownloadIcon from "../../components/DownloadIcon.jsx";
import PlusIcon from "../../components/icons/PlusIcon.jsx";

import PageHeader from "../../components/PageHeader.jsx";
import Table from "../../components/Table.jsx";
import AdvancedFilterModal from "./AdvancedFilterModal.jsx";

export default function Inventory() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [payload, setPayload] = useState("");

  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      setPayload(state);
    }
  }, [state]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleModalToggle(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleModalToggle(isVisible) {
    setIsModalVisible(isVisible);
  }

  function handleFilter(payloadBody) {
    setPayload(payloadBody);
  }

  return (
    <>
      <PageHeader title="Inventory">
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            <DownloadIcon />
            Export
          </button>
          <Link
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            to="/inventory/add-item"
          >
            <PlusIcon cssClass="mr-2 h-4 w-4" />
            Add Item
          </Link>
        </div>
      </PageHeader>
      <Table
        key={payload}
        configKey="item"
        onModalToggle={handleModalToggle}
        apiPayload={payload}
      />
      <AdvancedFilterModal
        isModalVisible={isModalVisible}
        onToggle={handleModalToggle}
        onFilter={handleFilter}
      />
    </>
  );
}
