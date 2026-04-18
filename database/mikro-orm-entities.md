# Connectify MikroORM Entities

## Entity Definitions for MikroORM

### 1. User Entity
```typescript
import { Entity, PrimaryKey, Property, OneToMany, Collection } from '@mikro-orm/core';
import { Contact } from './Contact';
import { Message } from './Message';
import { ChatMember } from './ChatMember';

@Entity()
export class User {
  @PrimaryKey()
  id!: string;

  @Property({ nullable: true, unique: true })
  email?: string;

  @Property({ nullable: true, unique: true })
  phone?: string;

  @Property({ nullable: true, unique: true })
  username?: string;

  @Property()
  password!: string;

  @Property()
  displayName!: string;

  @Property({ nullable: true })
  bio?: string;

  @Property({ nullable: true })
  profilePicture?: string;

  @Property({ default: false })
  isOnline = false;

  @Property({ nullable: true })
  lastSeen?: Date;

  @Property({ default: false })
  isVerified = false;

  @Property({ default: false })
  twoFactorEnabled = false;

  @Property({ type: 'json', nullable: true })
  privacySettings?: any;

  @Property({ nullable: true, default: 'default' })
  theme?: string;

  @OneToMany(() => Contact, contact => contact.user)
  contacts = new Collection<Contact>(this);

  @OneToMany(() => Message, message => message.sender)
  messages = new Collection<Message>(this);

  @OneToMany(() => ChatMember, member => member.user)
  chatMemberships = new Collection<ChatMember>(this);

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();
}
```

### 2. Chat Entity
```typescript
import { Entity, PrimaryKey, Property, OneToMany, Enum } from '@mikro-orm/core';
import { ChatMember } from './ChatMember';
import { Message } from './Message';

export enum ChatType {
  PRIVATE = 'private',
  GROUP = 'group',
  CHANNEL = 'channel'
}

@Entity()
export class Chat {
  @PrimaryKey()
  id!: string;

  @Enum(() => ChatType)
  type: ChatType = ChatType.PRIVATE;

  @Property({ nullable: true })
  name?: string;

  @Property({ nullable: true })
  description?: string;

  @Property({ nullable: true })
  avatar?: string;

  @Property({ default: false })
  isEncrypted = false;

  @Property({ nullable: true })
  lastMessageAt?: Date;

  @OneToMany(() => ChatMember, member => member.chat)
  members = new Collection<ChatMember>(this);

  @OneToMany(() => Message, message => message.chat)
  messages = new Collection<Message>(this);

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();
}
```

### 3. Message Entity
```typescript
import { Entity, PrimaryKey, Property, ManyToOne, OneToMany, Enum } from '@mikro-orm/core';
import { Chat } from './Chat';
import { User } from './User';
import { Reaction } from './Reaction';

export enum MessageType {
  TEXT = 'text',
  IMAGE = 'image',
  VIDEO = 'video',
  AUDIO = 'audio',
  DOCUMENT = 'document',
  VOICE = 'voice',
  STICKER = 'sticker'
}

@Entity()
export class Message {
  @PrimaryKey()
  id!: string;

  @ManyToOne(() => Chat)
  chat!: Chat;

  @ManyToOne(() => User)
  sender!: User;

  @Property({ nullable: true })
  content?: string;

  @Enum(() => MessageType)
  type: MessageType = MessageType.TEXT;

  @Property({ nullable: true })
  mediaUrl?: string;

  @Property({ nullable: true })
  fileSize?: number;

  @Property({ nullable: true })
  duration?: number;

  @Property({ nullable: true })
  thumbnail?: string;

  @Property({ default: false })
  isEdited = false;

  @Property({ type: 'json', nullable: true })
  editHistory?: any;

  @Property({ default: false })
  isForwarded = false;

  @Property({ nullable: true })
  forwardedFrom?: string;

  @Property({ nullable: true })
  replyToId?: string;

  @Property({ default: false })
  isDeleted = false;

  @Property({ nullable: true })
  deletedAt?: Date;

  @Property({ default: false })
  deleteForEveryone = false;

  @Property({ nullable: true })
  encryptionKey?: string;

  @OneToMany(() => Reaction, reaction => reaction.message)
  reactions = new Collection<Reaction>(this);

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();
}
```

### 4. Contact Entity
```typescript
import { Entity, PrimaryKey, Property, ManyToOne, Unique } from '@mikro-orm/core';
import { User } from './User';

@Entity()
@Unique({ properties: ['user', 'contactUser'] })
export class Contact {
  @PrimaryKey()
  id!: string;

  @ManyToOne(() => User)
  user!: User;

  @ManyToOne(() => User)
  contactUser!: User;

  @Property({ nullable: true })
  name?: string;

  @Property({ default: false })
  isFavorite = false;

  @Property()
  createdAt = new Date();
}
```

### 5. Reaction Entity
```typescript
import { Entity, PrimaryKey, Property, ManyToOne, Unique } from '@mikro-orm/core';
import { Message } from './Message';
import { User } from './User';

@Entity()
@Unique({ properties: ['message', 'user'] })
export class Reaction {
  @PrimaryKey()
  id!: string;

  @ManyToOne(() => Message)
  message!: Message;

  @ManyToOne(() => User)
  user!: User;

  @Property()
  emoji!: string;

  @Property()
  createdAt = new Date();
}
```

### 6. Status Entity
```typescript
import { Entity, PrimaryKey, Property, ManyToOne, OneToMany, Enum } from '@mikro-orm/core';
import { User } from './User';
import { StatusViewer } from './StatusViewer';

export enum StatusType {
  TEXT = 'text',
  IMAGE = 'image',
  VIDEO = 'video'
}

@Entity()
export class Status {
  @PrimaryKey()
  id!: string;

  @ManyToOne(() => User)
  user!: User;

  @Enum(() => StatusType)
  type: StatusType = StatusType.TEXT;

  @Property({ nullable: true })
  content?: string;

  @Property({ nullable: true })
  mediaUrl?: string;

  @Property({ nullable: true })
  backgroundColor?: string;

  @Property({ nullable: true })
  textColor?: string;

  @Property({ nullable: true })
  fontStyle?: string;

  @Property()
  expiresAt!: Date;

  @Property({ default: 0 })
  viewsCount = 0;

  @OneToMany(() => StatusViewer, viewer => viewer.status)
  viewers = new Collection<StatusViewer>(this);

  @Property()
  createdAt = new Date();
}
```

### 7. Call Entity
```typescript
import { Entity, PrimaryKey, Property, ManyToOne, Enum } from '@mikro-orm/core';
import { User } from './User';
import { Chat } from './Chat';

export enum CallType {
  VOICE = 'voice',
  VIDEO = 'video'
}

export enum CallStatus {
  INITIATED = 'initiated',
  RINGING = 'ringing',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  MISSED = 'missed',
  REJECTED = 'rejected',
  FAILED = 'failed'
}

@Entity()
export class Call {
  @PrimaryKey()
  id!: string;

  @ManyToOne(() => User)
  caller!: User;

  @ManyToOne(() => User, { nullable: true })
  receiver?: User;

  @ManyToOne(() => Chat, { nullable: true })
  chat?: Chat;

  @Enum(() => CallType)
  type: CallType = CallType.VOICE;

  @Enum(() => CallStatus)
  status: CallStatus = CallStatus.INITIATED;

  @Property({ nullable: true })
  duration?: number;

  @Property()
  startedAt = new Date();

  @Property({ nullable: true })
  endedAt?: Date;
}
```

### 8. Group Entity
```typescript
import { Entity, PrimaryKey, Property, OneToOne, ManyToOne } from '@mikro-orm/core';
import { Chat } from './Chat';
import { User } from './User';

@Entity()
export class Group {
  @PrimaryKey()
  id!: string;

  @OneToOne(() => Chat)
  chat!: Chat;

  @ManyToOne(() => User)
  creator!: User;

  @Property({ nullable: true })
  description?: string;

  @Property({ nullable: true })
  rules?: string;

  @Property({ default: false })
  isPublic = false;

  @Property({ nullable: true, unique: true })
  inviteLink?: string;

  @Property({ default: 1000 })
  maxMembers = 1000;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();
}
```

### 9. MikroORM Configuration
```typescript
// mikro-orm.config.ts
import { MikroORM } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { User } from './entities/User';
import { Chat } from './entities/Chat';
import { Message } from './entities/Message';
import { Contact } from './entities/Contact';
import { Reaction } from './entities/Reaction';
import { Status } from './entities/Status';
import { Call } from './entities/Call';
import { Group } from './entities/Group';
import { ChatMember } from './entities/ChatMember';
import { StatusViewer } from './entities/StatusViewer';

export default {
  entities: [
    User,
    Chat,
    Message,
    Contact,
    Reaction,
    Status,
    Call,
    Group,
    ChatMember,
    StatusViewer
  ],
  dbName: 'connectify',
  type: 'postgresql',
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'password',
  debug: process.env.NODE_ENV !== 'production',
  migrations: {
    path: './migrations',
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
} as Parameters<typeof MikroORM.init>[0];
```

### 10. Repository Pattern with MikroORM
```typescript
// repositories/UserRepository.ts
import { EntityRepository } from '@mikro-orm/postgresql';
import { User } from '../entities/User';

export class UserRepository extends EntityRepository<User> {
  async findByEmail(email: string): Promise<User | null> {
    return this.findOne({ email });
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.findOne({ username });
  }

  async findByPhone(phone: string): Promise<User | null> {
    return this.findOne({ phone });
  }

  async searchUsers(query: string, limit = 20): Promise<User[]> {
    return this.find({
      $or: [
        { username: { $like: `%${query}%` } },
        { displayName: { $like: `%${query}%` } },
        { phone: { $like: `%${query}%` } }
      ]
    }, { limit });
  }
}

// Usage in service
import { InjectRepository } from '@mikro-orm/nestjs';
import { User } from './entities/User';

export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: UserRepository
  ) {}

  async getUserById(id: string): Promise<User> {
    return this.userRepository.findOneOrFail(id);
  }
}
```

### 11. Migration Example
```typescript
// migrations/Migration20240101000000.ts
import { Migration } from '@mikro-orm/migrations';

export class Migration20240101000000 extends Migration {
  async up(): Promise<void> {
    this.addSql(`
      CREATE TABLE "user" (
        "id" varchar(255) NOT NULL,
        "email" varchar(255) NULL,
        "phone" varchar(255) NULL,
        "username" varchar(255) NULL,
        "password" varchar(255) NOT NULL,
        "display_name" varchar(255) NOT NULL,
        "bio" text NULL,
        "profile_picture" varchar(255) NULL,
        "is_online" boolean NOT NULL DEFAULT false,
        "last_seen" timestamptz NULL,
        "is_verified" boolean NOT NULL DEFAULT false,
        "two_factor_enabled" boolean NOT NULL DEFAULT false,
        "privacy_settings" jsonb NULL,
        "theme" varchar(255) NULL DEFAULT 'default',
        "created_at" timestamptz NOT NULL,
        "updated_at" timestamptz NOT NULL,
        CONSTRAINT "user_pkey" PRIMARY KEY ("id")
      );
    `);

    this.addSql('CREATE UNIQUE INDEX "user_email_unique" ON "user" ("email") WHERE email IS NOT NULL;');
    this.addSql('CREATE UNIQUE INDEX "user_phone_unique" ON "user" ("phone") WHERE phone IS NOT NULL;');
    this.addSql('CREATE UNIQUE INDEX "user_username_unique" ON "user" ("username") WHERE username IS NOT NULL;');
  }
}
```

### 12. Advantages of MikroORM for Connectify

1. **TypeScript First**: Full TypeScript support with type safety
2. **Identity Map**: Efficient memory usage with entity tracking
3. **Unit of Work**: Automatic change tracking and batch operations
4. **Performance**: Lazy loading and query optimization
5. **Flexibility**: Raw SQL queries when needed
6. **NestJS Integration**: First-class support with `@mikro-orm/nestjs`

### 13. Setup Commands

```bash
# Install dependencies
npm install @mikro-orm/core @mikro-orm/postgresql @mikro-orm/nestjs @mikro-orm/migrations

# Generate migration
npx mikro-orm migration:create

# Run migration
npx mikro-orm migration:up

# Generate entities from database
npx mikro-orm entity:generate

# Clear cache
npx mikro-orm cache:clear
```

This MikroORM setup provides a robust, type-safe ORM solution for your Connectify messaging app with all the features from WhatsApp, Telegram, and Messenger.