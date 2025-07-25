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
      { label: "Room", additionalStyles: "justify-start w-[25rem]" },
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
          additionalStyles: "w-[25rem]",
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
    rowActions: {
      visible: true,
      view: { show: true, path: "/rooms/room/" },
      edit: false,
      delete: false,
    },

    noData: "room",
  },

  item: {
    header: {
      title: "All Items",
      subtitle: "View and manage all inventory items across the department",
    },

    filterOptions: {
      visible: true,
      dropdown: { show: false },
      advancedFilter: { show: true },
      searchBar: { show: true, value: "Search items by name or id" },
    },

    columnHeaders: [
      {
        label: "Name & Category",
        additionalStyles: "justify-start w-[12rem]",
      },
      { label: "Item ID", additionalStyles: "justify-start w-24" },
      { label: "Make/Model No.", additionalStyles: "justify-start w-[12rem]" },
      { label: "Location", additionalStyles: "justify-start w-[17.5rem]" },
      { label: "Status", additionalStyles: "justify-center w-[5.75rem]" },
      { label: "Action", additionalStyles: "justify-center w-24" },
    ],

    responseMapping: {
      countKey: "totalItems",
      dataKey: "items",
      idKey: "_id",
      dataFields: [
        {
          key: "itemName",
          label: "Name",
          additionalStyles: "w-[12rem]",
          additionalDetail: "itemDescription",
        },
        { key: "itemSerialNumber", label: "Item ID", additionalStyles: "w-24" },
        {
          key: "itemModelNumberOrMake",
          label: "Make/Model No.",
          additionalStyles: "w-[12rem]",
        },
        {
          key: "itemRoom",
          label: "Location",
          additionalStyles: "w-[17.5rem]",
          additionalDetail: "itemFloor",
        },
        {
          key: "itemStatus",
          label: "Status",
          additionalStyles: "text-center w-[5.75rem] font-semibold",
        },
      ],
    },
    rowActions: {
      visible: true,
      view: { show: true, path: "/inventory/item/" },
      edit: false,
      delete: false,
    },
    noData: "item",
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

export const DROPDOWN_RESPONSE_MAPPING = {
  floor: {
    idKey: "_id",
    dataKey: "floorName",
  },
  roomType: {
    idKey: "_id",
    dataKey: "roomTypeName",
  },
  category: {
    idKey: "_id",
    dataKey: "categoryName",
  },
};
