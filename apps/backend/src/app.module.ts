import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { mikroOrmConfigFactory } from "./config/mikro-orm.config";
import { HealthModule } from "./health/health.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MikroOrmModule.forRoot(mikroOrmConfigFactory()),
    AuthModule,
    UserModule,
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
