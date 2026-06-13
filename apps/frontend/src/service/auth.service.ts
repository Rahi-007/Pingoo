import { ILoginPayload, ILoginRes } from "@/interface/auth.interface";
import { RTKApi } from "@/context/rtk-query";

export const authApi = RTKApi.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<ILoginRes, ILoginPayload>({
      query: data => ({
        url: "auth/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export function logout() {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem("accessToken");
    window.localStorage.removeItem("refreshToken");
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("userId");
  }
}

export const { useLoginMutation } = authApi;