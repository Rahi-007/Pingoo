import { RTKApi } from "@/context/rtk-query";
import { IUser } from "@/interface/user.interface";

export const userApi = RTKApi.injectEndpoints({
  endpoints: build => ({
    getUserByName: build.query<IUser, string>({
      query: name => `user/${name}`,
    }),
  }),
});

export const { useGetUserByNameQuery } = userApi;