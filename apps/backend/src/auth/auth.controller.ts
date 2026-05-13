import { Body, Controller, HttpCode, HttpStatus, InternalServerErrorException, Post, Put, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { toResponse } from "../utils/response";
import { AuthService } from "./auth.service";
import { LoginDto, LoginRes } from "./dto/logIn.dto";
import { SettingDto, SettingRes } from "./dto/setting.dto";
import { UserRes } from "./dto/userRes.dto";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private jwtService: JwtService
  ) {}

  // Y==========================================
  // Y---------------{ Login endpoint }---------
  // Y==========================================
  @Post("login")
  @ApiOperation({ summary: "User login" })
  @ApiResponse({ status: 200, description: "Login successful", type: LoginRes })
  @ApiResponse({ status: 401, description: "Invalid credentials" })
  @ApiResponse({ status: 500, description: "Internal server error" })
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto): Promise<LoginRes> {
    try {
      const user = await this.authService.validateUser(loginDto);

      const payload = {
        sub: user.id,
        userName: user.userName,
        role: user.role,
      };

      const accessToken: string = await this.jwtService.signAsync(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: "1h",
      });

      const userRes = toResponse(UserRes, user);

      return {
        accessToken,
        user: userRes,
      };
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new InternalServerErrorException("Something went wrong");
    }
  }

  // Y======================================
  // Y--------{ Register a new user }-------
  // Y======================================
  // @Post("register")
  // @ApiOperation({ summary: "Register user and auto login" })
  // @ApiResponse({
  //   status: 200,
  //   description: "Registration successful and auto login completed",
  //   type: LoginRes,
  // })
  // @ApiResponse({ status: 409, description: "Email or phone already exists" })
  // @ApiResponse({ status: 500, description: "Internal server error" })
  // async register(@Body() createUserDto: CreateUserDto): Promise<LoginRes> {
  //   try {
  //     const newUser = await this.authService.create(createUserDto);
  //     const loggedInUser = await this.authService.updateLastLoggedIn(newUser);

  //     const payload = {
  //       sub: loggedInUser.id,
  //       userName: loggedInUser.userName,
  //       role: loggedInUser.role,
  //     };

  //     const [accessToken, refreshToken] = await Promise.all([this.jwtService.generateToken(payload), this.jwtService.generateRefreshToken(payload)]);

  //     return {
  //       accessToken,
  //       refreshToken,
  //       user: this.buildUserResponse(loggedInUser),
  //     };
  //   } catch (error) {
  //     throw new Error(`Failed to register user: ${error instanceof Error ? error.message : "Unknown error"}`);
  //   }
  // }

  // Y=======================================================
  // Y-------------{ System Setting endpoint }---------------
  // Y=======================================================
  @Put("system-setting")
  @ApiOperation({ summary: "Update System Settings" })
  @ApiResponse({ status: 200, description: "Update successful", type: SettingRes })
  @ApiResponse({ status: 500, description: "Internal server error" })
  async updateSetting(@Body() settingDto: SettingDto): Promise<SettingRes> {
    try {
      const setting = await this.authService.updateSettings(settingDto);
      const settingRes = toResponse(SettingRes, setting);

      return settingRes;
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new InternalServerErrorException("Something went wrong");
    }
  }
}
