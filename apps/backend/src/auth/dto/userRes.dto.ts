import { Expose } from "class-transformer";
import { IsBoolean, IsDate, IsEnum, IsInt, IsString } from "class-validator";
import { Role } from "../../utils/enums";

export class UserRes {
  @Expose()
  @IsInt()
  id!: number;

  @Expose()
  @IsString()
  firstName!: string;

  @Expose()
  @IsString()
  lastName?: string;

  @Expose()
  @IsString()
  phone?: string;

  @Expose()
  @IsString()
  email!: string;

  @Expose()
  @IsString()
  address?: string;

  @Expose()
  @IsString()
  avatar?: string;

  @Expose()
  @IsDate()
  dob?: Date;

  @Expose()
  @IsDate()
  lastLoggedIn?: Date;

  @Expose()
  @IsString()
  gender?: string;

  @Expose()
  @IsString()
  bloodGroup!: string;

  @Expose()
  @IsBoolean()
  isVerified!: boolean;

  @Expose()
  @IsBoolean()
  isBlocked!: boolean;

  @Expose()
  @IsEnum(Role)
  role!: Role;

  @Expose()
  @IsDate()
  createdAt!: Date;

  @Expose()
  @IsDate()
  updatedAt!: Date;
}
