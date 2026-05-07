import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { IsString } from "class-validator";
import { UserRes } from "./userRes.dto";
// DTOs for authentication
export class LoginDto {
  @IsString()
  @ApiProperty({
    description: "User Name",
    example: "user007",
  })
  userName!: string;

  @IsString()
  @ApiProperty({
    description: "User password",
    example: "password123",
  })
  password!: string;
}

export class LoginRes {
  @Expose()
  @IsString()
  accessToken!: string;

  @Expose()
  @Type(() => UserRes)
  user!: UserRes;
}
