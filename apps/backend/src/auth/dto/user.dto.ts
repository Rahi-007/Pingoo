import { ApiProperty, ApiPropertyOptional, PartialType } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsBoolean, IsDateString, IsEnum, IsOptional, IsString } from "class-validator";
import { BloodGroup, Gender, Role } from "../../utils/enums";

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: "First Name",
    example: "John",
  })
  firstName!: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: "Last Name",
    example: "Doe",
  })
  lastName?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: "Phone Number",
    example: "1234567890",
    maxLength: 24,
  })
  @Transform(({ value }) => value?.trim())
  phone?: string;

  @IsString()
  @ApiProperty({
    description: "Email",
    example: "Wl1yS@example.com",
    maxLength: 64,
  })
  email!: string;

  @IsString()
  @ApiProperty({
    description: "Password",
    minLength: 8,
  })
  password!: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: "Address",
    example: "123 Main Street, USA",
  })
  address?: string;

  @IsDateString()
  @IsOptional()
  @ApiPropertyOptional({
    description: "Date of birth",
    example: "1990-01-01",
  })
  dob?: string;

  @IsEnum(Gender)
  @IsOptional()
  @ApiPropertyOptional({
    description: "Gender of User",
    example: Gender.Male,
    enum: Gender,
  })
  gender?: Gender;

  @IsEnum(BloodGroup)
  @IsOptional()
  @ApiPropertyOptional({
    description: "Blood group of User",
    example: BloodGroup.O_POS,
    enum: BloodGroup,
  })
  bloodGroup?: BloodGroup;

  @IsEnum(Role)
  @IsOptional()
  @ApiPropertyOptional({
    description: "Role of User",
    example: Role.USER,
    enum: Role,
  })
  role?: Role;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: "User Avatar URL",
    example: "https://example.com/avatar.jpg",
  })
  avatar?: string;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({
    description: "User verification status",
    example: false,
  })
  isVerified?: boolean;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({
    description: "User blocked status",
    example: false,
  })
  isBlocked?: boolean;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
