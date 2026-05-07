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

export interface ILoginRes {
  accessToken: string;
  user: IUser;
}
