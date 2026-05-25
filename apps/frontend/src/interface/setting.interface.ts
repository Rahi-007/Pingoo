export interface ISetting {
  key: string;
  value: string;
}
export interface ISettingRes {
  key: string;
  value: string;
  oldValue?: string;
  createdAt: Date;
  updatedAt?: Date;
}