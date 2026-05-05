import { JwtModuleOptions } from "@nestjs/jwt";
import { StringValue } from "ms";

// Factory functions using ConfigurationService
export const jwtConfigFactory = (): JwtModuleOptions => ({
  secret: process.env.JWT_SECRET!,
  signOptions: {
    expiresIn: process.env.JWT_EXPIRES_IN as StringValue,
  },
});

export const jwtRefreshConfigFactory = (): JwtModuleOptions => ({
  secret: process.env.JWT_REFRESH_SECRET!,
  signOptions: {
    expiresIn: process.env.JWT_REFRESH_EXPIRES_IN as StringValue,
  },
});
