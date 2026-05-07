import { EntityManager } from "@mikro-orm/postgresql";
import { Injectable } from "@nestjs/common";
import { ISetting, SettingSchema } from "./auth/entities/setting.entity";

@Injectable()
export class AppService {
  constructor(private readonly em: EntityManager) {}

  // Y-------{ System Settings }-----------
  async GetSettings(): Promise<ISetting[]> {
    return this.em.find(SettingSchema, {});
  }
}
