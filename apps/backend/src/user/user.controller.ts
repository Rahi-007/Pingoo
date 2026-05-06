import { Controller, Delete, Get, HttpException, InternalServerErrorException, Param, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserRes } from "../auth/dto/userRes.dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { RolesGuard } from "../auth/guards/roles.guard";
import { toResponse } from "../utils/response";
import { UserService } from "./user.service";

@ApiTags("User")
@ApiBearerAuth("JWT")
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Get()
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  // @ApiOperation({ summary: "Get all users" })
  // @ApiResponse({
  //   status: 200,
  //   description: "Users retrieved successfully",
  //   type: UserRes,
  //   isArray: true,
  // })
  // @ApiResponse({
  //   status: 401,
  //   description: "Unauthorized (invalid or missing token)",
  // })
  // @ApiResponse({
  //   status: 403,
  //   description: "Forbidden (admin access required)",
  // })
  // @ApiResponse({ status: 500, description: "Internal server error" })
  // @HttpCode(HttpStatus.OK)
  // async findAll(): Promise<UserRes[]> {
  //   try {
  //     const users = await this.userService.findAll();
  //     return users.map(user => this.buildUserResponse(user));
  //   } catch (error) {
  //     console.error("Fetch Users Error:", error);

  //     throw new InternalServerErrorException("Failed to fetch users");
  //   }
  // }

  // Y===============================================
  // Y-----------{ GET USER BY userName }------------
  // Y===============================================
  @Get(":userName")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Get user by userName" })
  @ApiResponse({
    status: 200,
    description: "User retrieved successfully",
    type: UserRes,
  })
  @ApiResponse({ status: 401, description: "Unauthorized Please logIn first!" })
  @ApiResponse({ status: 404, description: "User not found" })
  @ApiResponse({ status: 500, description: "Internal server error" })
  async findOne(@Param("userName") userName: string): Promise<UserRes> {
    try {
      const user = await this.userService.findOne(userName);
      return toResponse(UserRes, user);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new InternalServerErrorException("Failed to fetch user");
    }
  }

  // Y======================================
  // Y-----{ Update an existing user }------
  // Y======================================
  // @ApiOperation({ summary: "Update user by ID (owner or admin)" })
  // @ApiBearerAuth("JWT-auth")
  // @UseGuards(JwtAuthGuard)
  // @ApiResponse({
  //   status: 200,
  //   description: "User updated successfully",
  //   type: UserRes,
  // })
  // @ApiResponse({
  //   status: 401,
  //   description: "Unauthorized (invalid or missing token)",
  // })
  // @ApiResponse({
  //   status: 403,
  //   description: "Forbidden (only owner or admin can update)",
  // })
  // @ApiResponse({ status: 404, description: "User not found" })
  // @ApiResponse({ status: 409, description: "Email or phone already exists" })
  // @ApiResponse({ status: 500, description: "Internal server error" })
  // @Put(":id")
  // async update(
  //   @Param("id", ParseIntPipe) id: number,
  //   @Body() updateUserDto: UpdateUserDto,
  //   @Request() req: { user?: { sub?: number; role?: Role } }
  // ): Promise<UserRes> {
  //   try {
  //     const isAdmin = req.user?.role === Role.ADMIN;
  //     const isOwner = req.user?.sub === id;
  //     if (!isAdmin && !isOwner) {
  //       throw new ForbiddenException("You can only update your own profile");
  //     }
  //     const updatedUser = await this.userService.update(id, updateUserDto);
  //     return this.buildUserResponse(updatedUser);
  //   } catch (error) {
  //     if (error instanceof HttpException) {
  //       throw error;
  //     }
  //     throw new InternalServerErrorException("Failed to update user");
  //   }
  // }

  // Y====================================================
  // Y--------------{ Delete a userName }-----------------
  // Y====================================================
  @Delete(":userName")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: "Delete user by User name (admin only)" })
  @ApiResponse({ status: 200, description: "User deleted successfully" })
  @ApiResponse({ status: 403, description: "Forbidden (only admin can access)" })
  @ApiResponse({ status: 404, description: "User not found" })
  @ApiResponse({ status: 500, description: "Internal server error" })
  async remove(@Param("userName") userName: string) {
    try {
      await this.userService.remove(userName);
      return { message: `User deleted successfully` };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new InternalServerErrorException(`Failed to delete user: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  }
}
