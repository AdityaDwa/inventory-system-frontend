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
  },

  item: {
    getAllData: "/api/v1/items/all/",
    getFilteredData: "/api/v1/rooms/floor-filter/",
    getSearchedData: "/api/v1/items/name-search/",
  },

  activity: {
    getAllData: "/api/v1/inventory/logs/",
  },

  user: {
    getAllData: "/api/v1/users/active/",
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
  },
};
