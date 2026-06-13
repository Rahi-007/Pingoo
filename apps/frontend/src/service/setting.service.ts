import { RTKApi } from "@/context/rtk-query";
import { ISetting, ISettingRes } from "@/interface/setting.interface";

export const settingApi = RTKApi.injectEndpoints({
  endpoints: build => ({
    loadSetting: build.query<ISettingRes[], void>({
      query: () => "setting/all",
      providesTags: ["Setting"],
    }),

    editSetting: build.mutation<ISettingRes, Partial<ISetting>>({
      query: data => ({
        url: "setting/update",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Setting"],
    }),
  }),
});

export const {
  useLoadSettingQuery,
  useEditSettingMutation,
} = settingApi;