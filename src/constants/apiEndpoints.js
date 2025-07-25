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

  floor: {
    getDropdownData: "/api/v1/floors",
  },

  roomType: {
    getDropdownData: "/api/v1/room-types",
  },

  category: {
    getDropdownData: "/api/v1/categories",
  },
};
