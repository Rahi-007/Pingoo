import { API_URLS } from "@/config/configURL";
import { ISetting, ISettingRes } from "@/interface/setting.interface";
import axios, { AxiosResponse } from "axios";

export function loadSetting() {
  return new Promise<ISettingRes[]>(async (resolve, reject) => {
    try {
      const response = await axios.get<any, AxiosResponse<ISettingRes[]>>(API_URLS.setting.all());
      resolve(response.data);
    } catch (error: any) {
      reject(error.response?.data?.message || "Something went wrong");
    }
  });
}

export function editSetting(data: Partial<ISetting>) {
  return new Promise<ISettingRes>(async (resolve, reject) => {
    try {
      const response = await axios.put<any, AxiosResponse<ISettingRes>>(API_URLS.setting.update(), data);
      resolve(response.data);
    } catch (error: any) {
      reject(error.response?.data?.message || "Something went wrong");
    }
  });
}