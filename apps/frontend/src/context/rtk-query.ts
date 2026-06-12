import { BASE_URL } from "@/config/const";
import { IUser } from "@/interface/user.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//R---------{base URL and expected endpoints}------------R//
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
  endpoints: build => ({
    getUserByName: build.query<IUser, string>({
      query: name => `user/${name}`,
    }),
  }),
});

export const { useGetUserByNameQuery } = RTKApi;
