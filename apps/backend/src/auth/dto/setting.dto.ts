import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";
import { UserRes } from "./userRes.dto";
// DTOs for authentication
export class SettingDto {
  @IsString()
  @ApiProperty({
    description: "Key Name",
    example: "Theme",
  })
  @IsNotEmpty()
  key!: string;

  @IsString()
  @ApiProperty({
    description: "the key value",
    example: "dark",
  })
  value!: string;
}

export class SettingRes {
  @Expose()
  @IsString()
  key!: string;

  @Expose()
  @IsString()
  value!: UserRes;
}
