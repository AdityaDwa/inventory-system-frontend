export const TABLE_CONFIG = {
  room: {
    header: {
      title: "All Rooms",
      subtitle: "View and manage rooms across different floors",
    },

    filterOptions: {
      visible: true,
      dropdown: { show: true, value: "All floors", endPointKey: "floor" },
      advancedFilter: { show: false },
      searchBar: { show: true, value: "Search rooms by name" },
    },

    columnHeaders: [
      { label: "Room", additionalStyles: "justify-start w-[31.25rem]" },
      { label: "Type", additionalStyles: "justify-start w-40" },
      { label: "Floor", additionalStyles: "justify-start w-24" },
      { label: "Total Items", additionalStyles: "justify-center w-24" },
      { label: "Action", additionalStyles: "justify-center w-24" },
    ],

    responseMapping: {
      countKey: "totalRooms",
      dataKey: "rooms",
      idKey: "_id",
      dataFields: [
        {
          key: "roomName",
          label: "Room",
          additionalStyles: "w-[31.25rem]",
          additionalDetail: "allottedTo",
        },
        { key: "roomTypeName", label: "Type", additionalStyles: "w-40" },
        { key: "roomFloorName", label: "Floor", additionalStyles: "w-24" },
        {
          key: "totalItems",
          label: "Total Items",
          additionalStyles: "w-24 text-center",
        },
      ],
    },
    rowActions: { visible: true, view: true, edit: false, delete: false },
  },

  inventory: {
    header: {
      title: "All Items",
      subtitle: "View and manage all inventory items across the department",
    },

    filterOptions: {
      visible: true,
      dropdown: { show: false },
      advancedFilter: { show: true },
      searchBar: { show: true, value: "Search items by name" },
    },

    columnHeaders: [
      { label: "Name", additionalStyles: "justify-start w-[8.25rem]" },
      { label: "Item ID", additionalStyles: "justify-start w-24" },
      { label: "Category", additionalStyles: "justify-start w-[6.75rem]" },
      { label: "Make/Model No.", additionalStyles: "justify-start w-[7.5rem]" },
      { label: "Location", additionalStyles: "justify-start w-[17.5rem]" },
      { label: "Status", additionalStyles: "justify-center w-[5.75rem]" },
      { label: "Action", additionalStyles: "justify-center w-24" },
    ],

    responseMapping: {
      countKey: "total_items",
      dataKey: "item_data",
      idKey: "item_id",
      dataFields: [
        { key: "item_name", label: "Name", additionalStyles: "w-[8.25rem]" },
        { key: "item_serial_no", label: "Item ID", additionalStyles: "w-24" },
        {
          key: "item_category_name",
          label: "Category",
          additionalStyles: "w-[6.75rem]",
        },
        {
          key: "item_make_or_model_no",
          label: "Make/Model No.",
          additionalStyles: "w-[7.5rem]",
        },
        {
          key: "item_room",
          label: "Location",
          additionalStyles: "w-[17.5rem]",
          additionalDetail: "item_floor",
        },
        {
          key: "item_status",
          label: "Status",
          additionalStyles: "text-center w-[5.75rem] font-semibold",
        },
      ],
    },
    rowActions: { visible: true, view: true, edit: false, delete: false },
  },
};

export const overviewConfig = {
  responseMapping: {
    totalItems: "no_total_items",
    workingItems: "no_working",
    repairableItems: "no_repairable",
    notWorkingItems: "no_not_working",
    totalInventoryValue: "inventory_total_value",
    totalItemsTillLastMonth: "no_total_items_till_last_month",
  },
};

export const RESPONSE_MAPPING = {
  floor: {
    idKey: "_id",
    dataKey: "floorName",
  },
  roomType: {
    idKey: "_id",
    dataKey: "roomTypeName",
  },
};
