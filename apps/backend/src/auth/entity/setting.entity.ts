import { Entity, Property } from "@mikro-orm/core";
import { BaseSchema } from "./base.entity";

@Entity()
export class SettingSchema extends BaseSchema {
  @Property({ unique: true, length: 191 })
  key!: string;

  @Property({ type: "text" })
  value!: string;

  @Property({ type: "text", nullable: true })
  oldValue?: string;
}

export type ISetting = SettingSchema;
