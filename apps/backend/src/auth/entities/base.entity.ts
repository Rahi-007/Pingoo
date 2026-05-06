import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity({ abstract: true })
export abstract class BaseSchema {
  @PrimaryKey()
  id!: number;

  @Property({ onCreate: () => new Date() })
  createdAt!: Date;

  @Property({ onUpdate: () => new Date(), nullable: true })
  updatedAt?: Date;
}
