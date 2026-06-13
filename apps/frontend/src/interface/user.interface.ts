//W---------={ Interface }=----------</br>

export interface IUser {
  id: number;
  firstName: string;
  lastName?: string;
  userName?: string;
  phone?: string;
  email: string;
  address?: string;
  avatar?: string;
  dob?: Date;
  lastLoggedIn?: Date;
  gender?: string;
  bloodGroup?: string;
  isVerified: boolean;
  isBlocked: boolean;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAddUser {
  firstName: string;
  lastName?: string;
  phone?: string;
  email: string;
  password: string;
  address?: string;
}
