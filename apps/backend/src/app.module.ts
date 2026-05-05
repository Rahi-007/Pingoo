import { Module } from "@nestjs/common";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { mikroOrmConfigFactory } from "./config/mikro-orm.config";
import { CustomJwtModule } from "./config/jwt/jwt.module";
import { HealthModule } from "./health/health.module";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [MikroOrmModule.forRoot(mikroOrmConfigFactory()), CustomJwtModule, AuthModule, UserModule, HealthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
