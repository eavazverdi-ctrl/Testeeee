
import React from 'react';
import type { Chat } from '../types';

interface ChatItemProps {
  chat: Chat;
}

const ChatItem: React.FC<ChatItemProps> = ({ chat }) => {
  return (
    <div className="flex items-center p-3 hover:bg-slate-800 rounded-lg cursor-pointer transition-colors">
      <div className="relative flex-shrink-0">
        <img className="w-14 h-14 rounded-full object-cover" src={chat.avatarUrl} alt={chat.username} />
        {chat.isOnline && (
          <span className="absolute bottom-0 right-0 block h-3.5 w-3.5 rounded-full bg-green-500 border-2 border-slate-800"></span>
        )}
      </div>
      <div className="flex-grow mx-4">
        <p className="font-semibold text-slate-100">{chat.username}</p>
        <p className={`text-sm truncate ${chat.unreadCount > 0 ? 'text-slate-200 font-medium' : 'text-slate-400'}`}>
          {chat.lastMessage}
        </p>
      </div>
      <div className="flex flex-col items-end text-xs space-y-1.5 text-slate-500">
        <span>{chat.timestamp}</span>
        {chat.unreadCount > 0 && (
          <span className="bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {chat.unreadCount}
          </span>
        )}
      </div>
    </div>
  );
};

export default ChatItem;
