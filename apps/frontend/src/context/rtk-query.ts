import { BASE_URL } from "@/config/const";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const RTKApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api`,
    prepareHeaders: headers => {
      const token = localStorage.getItem("accessToken");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Setting"],
  endpoints: () => ({}),
});
