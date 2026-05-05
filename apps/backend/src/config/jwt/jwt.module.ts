import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { CustomJwtService } from "./jwt.service";
import { jwtConfigFactory } from "./jwt.config";
import { JwtStrategy } from "./jwt.strategy";
import { JwtRefreshStrategy } from "./jwt-refresh.strategy";

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [],
      useFactory: jwtConfigFactory,
      inject: [],
    }),
  ],
  providers: [JwtStrategy, JwtRefreshStrategy, CustomJwtService],
  exports: [JwtModule, JwtStrategy, JwtRefreshStrategy, CustomJwtService],
})
export class CustomJwtModule {}
