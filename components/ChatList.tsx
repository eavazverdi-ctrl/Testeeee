
import React from 'react';
import type { Chat } from '../types';
import ChatItem from './ChatItem';

interface ChatListProps {
  chats: Chat[];
}

const ChatList: React.FC<ChatListProps> = ({ chats }) => {
  return (
    <div className="relative px-2 pt-4">
      {chats.map((chat) => (
        <ChatItem key={chat.id} chat={chat} />
      ))}
    </div>
  );
};

export default ChatList;
