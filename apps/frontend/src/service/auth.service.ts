import axios, { AxiosResponse } from "axios";
import { API_URLS } from "@/config/configURL";
import { ILoginPayload, ILoginRes, IRegisterPayload } from "@/interface/auth.interface";

export function login(data: ILoginPayload) {
  return new Promise<ILoginRes>(async (resolve, reject) => {
    try {
      const response = await axios.post<any, AxiosResponse<ILoginRes>>(API_URLS.auth.login(), data);
      resolve(response.data);
    } catch (error: any) {
      reject(error.response?.data?.message || "Something went wrong");
    }
  });
}

export function register(data: IRegisterPayload) {
  return new Promise<ILoginRes>(async (resolve, reject) => {
    try {
      const response = await axios.post<any, AxiosResponse<ILoginRes>>(API_URLS.auth.register(), data);
      resolve(response.data);
    } catch (error: any) {
      reject(error.response?.data?.message || "Something went wrong");
    }
  });
}

export function logout() {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem("accessToken");
    window.localStorage.removeItem("refreshToken");
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("userId");
  }
}
