export const TABLE_CONFIG = {
  room: {
    header: {
      title: "All Rooms",
      subtitle: "View and manage rooms across different floors",
    },

    filterOptions: {
      visible: true,
      dropdown: { show: true, value: "All floors" },
      advancedFilter: { show: false },
      searchBar: { show: true, value: "Search rooms by name" },
    },

    columnHeaders: [
      { label: "Room", additionalStyles: "text-left w-[31.25rem]" },
      { label: "Type", additionalStyles: "text-left" },
      { label: "Floor", additionalStyles: "text-left" },
      { label: "Total Items", additionalStyles: "" },
      { label: "Action", additionalStyles: "" },
    ],

    responseMapping: {
      countKey: "total_rooms",
      dataKey: "room_data",
      idKey: "room_id",
      dataFields: [
        {
          key: "room_name",
          label: "Room",
          additionalStyles: "",
          additionalDetail: "room_allot_to",
        },
        { key: "room_type_name", label: "Type", additionalStyles: "" },
        { key: "room_floor_name", label: "Floor", additionalStyles: "" },
        {
          key: "no_room_total_items",
          label: "Total Items",
          additionalStyles: "justify-center",
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
      dropdown: { show: false, value: "" },
      advancedFilter: { show: true },
      searchBar: { show: true, value: "Search items by name" },
    },

    columnHeaders: [
      { label: "Name", additionalStyles: "text-left" },
      { label: "Item ID", additionalStyles: "text-left" },
      { label: "Category", additionalStyles: "text-left" },
      { label: "Make/Model No.", additionalStyles: "text-left" },
      { label: "Location", additionalStyles: "text-left" },
      { label: "Status", additionalStyles: "" },
      { label: "Action", additionalStyles: "" },
    ],

    responseMapping: {
      countKey: "total_items",
      dataKey: "item_data",
      idKey: "item_id",
      dataFields: [
        { key: "item_name", label: "Name", additionalStyles: "" },
        { key: "item_serial_no", label: "Item ID", additionalStyles: "" },
        { key: "item_category_name", label: "Floor", additionalStyles: "" },
        {
          key: "item_make_or_model_no",
          label: "Make/Model No.",
          additionalStyles: "",
        },
        { key: "item_room", label: "Location", additionalStyles: "" },
        {
          key: "item_status",
          label: "Status",
          additionalStyles: "justify-center",
        },
      ],
    },
    rowActions: { visible: true, view: true, edit: false, delete: false },
  },
};
