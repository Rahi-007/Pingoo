import { ApiProperty } from "@nestjs/swagger";
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

export class LoginResponseDto {
  @ApiProperty({ description: "Access token" })
  accessToken!: string;

  @ApiProperty({ type: UserRes, description: "User information" })
  user!: UserRes;
}
