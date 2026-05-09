import { api } from "@/config/configURL";
import { IUser } from "@/interface/user.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//R---------{base URL and expected endpoints}------------R//
export const RTKApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${api}` }),
  endpoints: build => ({
    getUserByName: build.query<IUser, string>({
      query: name => `user/${name}`,
    }),
  }),
});

export const { useGetUserByNameQuery } = RTKApi;
