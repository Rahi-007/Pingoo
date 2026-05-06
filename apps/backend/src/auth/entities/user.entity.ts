import { Entity, Property, ManyToOne, OneToMany } from "@mikro-orm/core";
import { BloodGroup, Gender, Role } from "../../utils/enums";
import { BaseSchema } from "./base.entity";

@Entity()
export class UserSchema extends BaseSchema {
  @Property({ length: 191 })
  firstName!: string;

  @Property({ length: 191, nullable: true })
  lastName?: string;

  @Property({ nullable: true, length: 64 })
  displayName?: string;

  @Property({ unique: true, length: 16, nullable: true })
  phone?: string;

  @Property({ unique: true })
  userName!: string;

  @Property({ unique: true, length: 64 })
  email!: string;

  @Property({ length: 191, nullable: true })
  avatar?: string;

  @Property({ length: 191, nullable: true })
  coverPicture?: string;

  @Property({ length: 64 })
  passHash!: string;

  @Property({ length: 64, nullable: true })
  address?: string;

  @Property({ nullable: true })
  bio?: string;

  @Property({ nullable: true })
  dob?: Date;

  @Property({ type: "string", nullable: true })
  gender?: Gender;

  @Property({ type: "string", nullable: true })
  bloodGroup?: BloodGroup;

  @Property({ type: "string", default: Role.USER })
  role!: Role;

  @Property({ default: false })
  isOnline = false;

  @Property({ default: false })
  isVerified = false;

  @Property({ default: false })
  isBlocked = false;

  // @Property({ type: 'json', nullable: true })
  // privacySettings?: any;

  // @Property({ nullable: true, default: 'default' })
  // theme?: string;

  // @OneToMany(() => Contact, contact => contact.user)
  // contacts = new Collection<Contact>(this);

  // @OneToMany(() => Message, message => message.sender)
  // messages = new Collection<Message>(this);

  // @OneToMany(() => ChatMember, member => member.user)
  // chatMemberships = new Collection<ChatMember>(this);

  @Property({ nullable: true })
  lastSeen?: Date;

  @Property({ nullable: true })
  lastLoginAt?: Date;
}

export type IUser = UserSchema;
