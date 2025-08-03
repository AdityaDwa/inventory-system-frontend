export default function getEndpoint(
  identifier,
  action,
  payload = "",
  offset = ""
) {
  const baseUrl = API_ENDPOINTS[identifier][action];

  if (payload === "" && offset === "") {
    return baseUrl;
  }

  if (payload === "") {
    return `${baseUrl}${offset}`;
  }

  if (offset === "") {
    return `${baseUrl}${payload}`;
  }

  return `${baseUrl}${payload}/${offset}`;
}

export const API_ENDPOINTS = {
  dashboard: {
    getInventoryStats: "/api/v1/inventory/stats",
    getRecentActivities: "/api/v1/inventory/recent_logs",
  },

  room: {
    getAllData: "/api/v1/rooms/",
    getFilteredData: "/api/v1/rooms/floor-filter/",
    getSearchedData: "/api/v1/rooms/search/",
    getDropdownData: "/api/v1/rooms/floor-filter/",
    addData: "/api/v1/rooms",
    editData: "/api/v1/rooms/",
    deleteData: "/api/v1/rooms/",
    getItems: "/api/v1/items/similar/",
  },

  item: {
    getAllData: "/api/v1/items/all/",
    getFilteredData: "/api/v1/items/filter/",
    getSearchedData: "/api/v1/items/search/",
    getDropdownData: "/api/v1/items/item_source",
    addData: "/api/v1/items",
    deleteData: "/api/v1/items/",
    updateMultipleData: "/api/v1/items/similar/bulk/status",
    moveMultipleData: "/api/v1/items/similar/bulk/room",
    deleteMultipleData: "/api/v1/items/similar/bulk",
  },

  activity: {
    getAllData: "/api/v1/inventory/logs/",
    getFilteredData: "/api/v1/inventory/logs/filter/",
  },

  user: {
    getAllData: "/api/v1/users/active/",
    getSearchedData: "/api/v1/users/",
    getCurrentUserData: "/api/v1/users/current-user",
  },

  floor: {
    getDropdownData: "/api/v1/floors",
  },

  roomType: {
    getDropdownData: "/api/v1/room-types",
  },

  category: {
    getAllData: "/api/v1/categories/description/",
    getDropdownData: "/api/v1/categories",
    addData: "/api/v1/categories",
    deleteData: "/api/v1/categories/",
  },

  status: {
    getDropdownData: "/api/v1/items/item_status",
  },
};
