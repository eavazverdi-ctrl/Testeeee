
export interface Story {
  id: number;
  username: string;
  avatarUrl: string;
  isCurrentUser?: boolean;
  hasNewStory?: boolean;
  isVerified?: boolean;
}

export interface Chat {
  id: number;
  username:string;
  avatarUrl: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  isOnline?: boolean;
}
