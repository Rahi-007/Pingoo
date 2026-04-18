# Connectify API Endpoints

## Base URL
```
https://api.connectify.com/v1
```

## Authentication
All endpoints require authentication unless specified. Use Bearer token in Authorization header:
```
Authorization: Bearer <jwt_token>
```

## Response Format
```json
{
  "success": true,
  "data": {},
  "message": "Operation successful",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

Error response:
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description"
  },
  "timestamp": "2024-01-01T00:00:00Z"
}
```

## API Endpoints

### 1. Authentication

#### POST /auth/register
Register a new user (WhatsApp/Telegram style)

**Request Body:**
```json
{
  "email": "user@example.com",
  "phone": "+8801712345678",
  "username": "john_doe", // Telegram-style
  "password": "securepassword",
  "displayName": "John Doe",
  "profilePicture": "base64_or_url"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "email": "user@example.com",
      "username": "john_doe",
      "displayName": "John Doe",
      "profilePicture": "url"
    },
    "tokens": {
      "accessToken": "jwt_token",
      "refreshToken": "refresh_token",
      "expiresIn": 3600
    }
  }
}
```

#### POST /auth/login
Login with email/phone/username

**Request Body:**
```json
{
  "identifier": "user@example.com", // or phone or username
  "password": "securepassword"
}
```

#### POST /auth/refresh
Refresh access token

**Request Body:**
```json
{
  "refreshToken": "refresh_token"
}
```

#### POST /auth/logout
Logout user (invalidate tokens)

#### POST /auth/verify-otp
Verify OTP for phone registration (WhatsApp style)

### 2. User Management

#### GET /users/me
Get current user profile

#### PUT /users/me
Update user profile

**Request Body:**
```json
{
  "displayName": "New Name",
  "bio": "Updated bio",
  "profilePicture": "new_url",
  "privacySettings": {
    "lastSeen": "everyone",
    "profilePhoto": "contacts",
    "status": "nobody"
  },
  "theme": "dark" // Messenger-style themes
}
```

#### GET /users/search?q=john
Search users by username, display name, or phone

#### GET /users/{userId}
Get user public profile

#### POST /users/{userId}/block
Block a user

#### DELETE /users/{userId}/block
Unblock a user

### 3. Contacts

#### GET /contacts
Get user's contact list

#### POST /contacts
Add a contact

**Request Body:**
```json
{
  "contactId": "user_456",
  "name": "Custom Name" // Optional custom name
}
```

#### DELETE /contacts/{contactId}
Remove a contact

#### PUT /contacts/{contactId}/favorite
Mark/unmark as favorite

### 4. Chats

#### GET /chats
Get all chats for user (sorted by last message)

**Query Parameters:**
- `type`: private, group, channel
- `limit`: 50 (default)
- `offset`: 0

#### POST /chats
Create a new chat

**Request Body:**
```json
{
  "type": "private",
  "participantIds": ["user_456"] // For private chat
}
```

or for group:
```json
{
  "type": "group",
  "name": "Family Group",
  "description": "Family chat group",
  "participantIds": ["user_456", "user_789"],
  "avatar": "group_avatar_url"
}
```

#### GET /chats/{chatId}
Get chat details

#### PUT /chats/{chatId}
Update chat (name, description, avatar)

#### DELETE /chats/{chatId}
Leave/delete chat

### 5. Messages

#### GET /chats/{chatId}/messages
Get messages in a chat

**Query Parameters:**
- `limit`: 50 (default)
- `before`: messageId (for pagination)
- `after`: messageId (for newer messages)

#### POST /chats/{chatId}/messages
Send a message

**Request Body:**
```json
{
  "content": "Hello there!",
  "type": "text",
  "replyToId": "msg_123", // Optional: reply to message
  "isForwarded": false,
  "forwardedFrom": null,
  "media": {
    "url": "media_url",
    "type": "image",
    "size": 1024,
    "duration": 30 // for voice/video
  }
}
```

#### PUT /messages/{messageId}
Edit a message (Telegram feature)

**Request Body:**
```json
{
  "content": "Edited message"
}
```

#### DELETE /messages/{messageId}
Delete a message

**Query Parameters:**
- `forEveryone`: true/false (WhatsApp feature)

#### POST /messages/{messageId}/react
React to a message (Messenger feature)

**Request Body:**
```json
{
  "emoji": "❤️"
}
```

#### DELETE /messages/{messageId}/react
Remove reaction

#### POST /messages/{messageId}/read
Mark message as read (read receipt)

#### POST /messages/{messageId}/pin
Pin a message in chat (Telegram feature)

#### DELETE /messages/{messageId}/pin
Unpin a message

### 6. Groups

#### POST /groups
Create a group

**Request Body:**
```json
{
  "name": "Study Group",
  "description": "Group for studying",
  "avatar": "group_avatar_url",
  "isPublic": false,
  "rules": "Be respectful",
  "participantIds": ["user_456", "user_789"]
}
```

#### GET /groups/{groupId}
Get group details

#### PUT /groups/{groupId}
Update group settings

#### POST /groups/{groupId}/members
Add members to group

#### DELETE /groups/{groupId}/members/{userId}
Remove member from group

#### PUT /groups/{groupId}/members/{userId}/role
Change member role (owner, admin, member)

#### POST /groups/{groupId}/invite-link
Generate invite link

#### GET /groups/join/{inviteCode}
Join group via invite link

### 7. Channels

#### POST /channels
Create a channel (Telegram feature)

**Request Body:**
```json
{
  "name": "News Channel",
  "description": "Daily news updates",
  "isPrivate": true
}
```

#### GET /channels/{channelId}
Get channel details

#### POST /channels/{channelId}/subscribe
Subscribe to channel

#### DELETE /channels/{channelId}/subscribe
Unsubscribe from channel

#### POST /channels/{channelId}/broadcast
Send broadcast message to all subscribers

### 8. Status/Stories

#### POST /status
Create a status (24-hour disappearing)

**Request Body:**
```json
{
  "type": "image",
  "content": "Optional text",
  "mediaUrl": "image_url",
  "backgroundColor": "#FF0000", // for text status
  "textColor": "#FFFFFF",
  "fontStyle": "bold"
}
```

#### GET /status
Get statuses from contacts

#### GET /status/{statusId}
Get status details

#### POST /status/{statusId}/view
Mark status as viewed

#### GET /status/{statusId}/viewers
Get list of viewers

### 9. Calls

#### POST /calls/initiate
Initiate a call

**Request Body:**
```json
{
  "type": "video",
  "receiverId": "user_456",
  "chatId": "chat_123" // Optional: call within a chat
}
```

#### POST /calls/{callId}/accept
Accept incoming call

#### POST /calls/{callId}/reject
Reject incoming call

#### POST /calls/{callId}/end
End ongoing call

#### GET /calls/history
Get call history

### 10. Media

#### POST /media/upload
Upload media file

**Content-Type:** multipart/form-data

**Form Data:**
- file: The media file
- type: image, video, audio, document
- chatId: Optional - associate with chat

**Response:**
```json
{
  "success": true,
  "data": {
    "url": "cdn_url",
    "thumbnail": "thumbnail_url",
    "size": 1024,
    "type": "image"
  }
}
```

#### GET /media/{mediaId}
Get media metadata

### 11. Real-time Events (WebSocket)

WebSocket connection: `wss://api.connectify.com/v1/ws`

**Events:**

#### Client → Server:
- `auth`: Send authentication token
- `typing`: Send typing indicator
  ```json
  {
    "chatId": "chat_123",
    "isTyping": true
  }
  ```
- `presence`: Update online status
- `call_signal`: WebRTC signaling for calls

#### Server → Client:
- `message`: New message received
- `message_edited`: Message was edited
- `message_deleted`: Message was deleted
- `typing`: User is typing
- `presence`: User online status changed
- `call_incoming`: Incoming call
- `call_accepted`: Call was accepted
- `call_ended`: Call ended
- `status_update`: New status from contact

### 12. Bots (Telegram-style)

#### POST /bots
Register a bot

#### POST /bots/{botId}/webhook
Set webhook for bot

#### POST /webhook/bot/{botToken}
Bot webhook endpoint

### 13. Notifications

#### GET /notifications
Get user notifications

#### PUT /notifications/{notificationId}/read
Mark notification as read

#### PUT /notifications/settings
Update notification preferences

## Rate Limiting
- Authentication endpoints: 5 requests per minute
- Message sending: 60 requests per minute
- Media upload: 10 requests per minute
- API overall: 1000 requests per hour

## WebSocket Connection Limits
- Max connections per user: 5
- Heartbeat interval: 30 seconds
- Connection timeout: 60 seconds

## Error Codes

### Authentication Errors (4xx)
- `AUTH_INVALID_TOKEN`: Invalid or expired token
- `AUTH_INVALID_CREDENTIALS`: Wrong username/password
- `AUTH_USER_NOT_FOUND`: User doesn't exist
- `AUTH_USER_EXISTS`: User already exists
- `AUTH_INSUFFICIENT_PERMISSIONS`: Insufficient permissions

### Chat Errors (4xx)
- `CHAT_NOT_FOUND`: Chat doesn't exist
- `CHAT_NO_PERMISSION`: User not in chat
- `CHAT_READ_ONLY`: Chat is read-only (channel)
- `CHAT_BLOCKED`: User is blocked

### Message Errors (4xx)
- `MESSAGE_NOT_FOUND`: Message doesn't exist
- `MESSAGE_NOT_EDITABLE`: Message can't be edited
- `MESSAGE_TOO_LONG`: Message exceeds length limit
- `MEDIA_TOO_LARGE`: Media file too large

### Rate Limit Errors (429)
- `RATE_LIMIT_EXCEEDED`: Too many requests

### Server Errors (5xx)
- `INTERNAL_SERVER_ERROR`: Generic server error
- `SERVICE_UNAVAILABLE`: Service temporarily unavailable
- `DATABASE_ERROR`: Database operation failed