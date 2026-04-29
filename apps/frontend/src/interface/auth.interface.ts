import { IUser } from "./user.interface";

export interface ILoginPayload {
  userName: string;
  password: string;
}

export interface IRegisterPayload {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
}

export interface ILoginResponseData {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

// API response format
export interface ILoginResponse {
  success: boolean;
  message: string;
  data: ILoginResponseData;
  timestamp: string;
  path: string;
  statusCode?: number;
}
