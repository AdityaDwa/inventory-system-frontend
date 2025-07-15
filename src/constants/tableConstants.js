export const TABLE_CONSTANTS = {
  room: {
    tableHeader: {
      heading: "All Rooms",
      tableInfo: "View and manage rooms across different floors",
    },

    tableFilter: {
      visible: true,
      dropdown: true,
      advancedFilter: false,
      searchBar: true,
    },

    tableCaptions: [
      { heading: "Room", additionalStyles: "text-left" },
      { heading: "Type", additionalStyles: "text-left" },
      { heading: "Floor", additionalStyles: "text-left" },
      { heading: "Total Items", additionalStyles: "" },
      { heading: "Action", additionalStyles: "" },
    ],

    responseVar: {
      count: "total_rooms",
      data: "room_data",
      responseKeys: [
        { key: "Room", additionalStyles: "font-medium" },
        { key: "Type", additionalStyles: "" },
        { key: "Floor", additionalStyles: "" },
        { key: "Total Items", additionalStyles: "text-center" },
        { key: "", additionalStyles: "w-[7.5rem]" },
      ],
    },
  },
};
