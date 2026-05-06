import { defineConfig } from "@mikro-orm/postgresql";
import * as dotenv from "dotenv";
import { SettingSchema } from "../auth/entities/setting.entity";
import { UserSchema } from "../auth/entities/user.entity";

dotenv.config();

export const ENTITIES = [UserSchema, SettingSchema];

export default defineConfig({
  clientUrl: process.env.DATABASE_URL,
  entities: ENTITIES,
  debug: false,
  allowGlobalContext: true,
  pool: {
    min: 2,
    max: 10,
  },
  seeder: {
    path: "./src/config",
    defaultSeeder: "Seed",
  },
  driverOptions: {
    connection: {
      ssl: true,
    },
  },
});

// Alternative factory-based configuration for MikroOrmModule.forRootAsync
export const mikroOrmConfigFactory = () => {
  return defineConfig({
    clientUrl: process.env.DATABASE_URL,
    entities: ENTITIES,
    allowGlobalContext: true,
    pool: {
      min: 2,
      max: 10,
    },
    seeder: {
      path: "./src/config",
      defaultSeeder: "Seed",
    },
    driverOptions: {
      connection: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    },
  });
};
