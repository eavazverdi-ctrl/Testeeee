
import React from 'react';
import StoryReel from './components/StoryReel';
import ChatList from './components/ChatList';
import BottomNav from './components/BottomNav';
import type { Story, Chat } from './types';

const App: React.FC = () => {
  // Mock data for stories and chats
  const stories: Story[] = [
    { id: 1, username: 'Add Story', avatarUrl: ``, isCurrentUser: true },
    { id: 2, username: 'Henry', avatarUrl: `https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, hasNewStory: true, isVerified: true },
    { id: 3, username: 'Albert Flores', avatarUrl: `https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, hasNewStory: true },
    { id: 4, username: 'Floyd', avatarUrl: `https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, hasNewStory: false },
    { id: 5, username: 'Kathryn', avatarUrl: `https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, hasNewStory: true },
    { id: 6, username: 'Hassan', avatarUrl: `https://picsum.photos/seed/s6/200`, hasNewStory: false },
    { id: 7, username: 'Fatemeh', avatarUrl: `https://picsum.photos/seed/s7/200`, hasNewStory: false },
  ];

  const chats: Chat[] = [
    { id: 1, username: 'Zahra', avatarUrl: `https://picsum.photos/seed/c1/200`, lastMessage: 'باشه حتما، فردا میبینمت', timestamp: '10:42 AM', unreadCount: 2, isOnline: true },
    { id: 2, username: 'Reza', avatarUrl: `https://picsum.photos/seed/c2/200`, lastMessage: 'سلام! چطوری؟', timestamp: '9:30 AM', unreadCount: 0, isOnline: false },
    { id: 3, username: 'Maryam', avatarUrl: `https://picsum.photos/seed/c3/200`, lastMessage: 'ممنون از کمکت', timestamp: 'Yesterday', unreadCount: 0, isOnline: true },
    { id: 4, username: 'Hassan', avatarUrl: `https://picsum.photos/seed/c4/200`, lastMessage: 'You: Check this out!', timestamp: 'Yesterday', unreadCount: 0, isOnline: false },
    { id: 5, username: 'Fatemeh', avatarUrl: `https://picsum.photos/seed/c5/200`, lastMessage: 'فایل رو برات فرستادم', timestamp: 'Wednesday', unreadCount: 5, isOnline: true },
    { id: 6, username: 'Hossein', avatarUrl: `https://picsum.photos/seed/c6/200`, lastMessage: '... 😄', timestamp: 'Wednesday', unreadCount: 0, isOnline: false },
    { id: 7, username: 'Neda', avatarUrl: `https://picsum.photos/seed/c7/200`, lastMessage: 'باشه پس هماهنگ میکنم', timestamp: '11/10/24', unreadCount: 0, isOnline: false },
    { id: 8, username: 'Kian', avatarUrl: `https://picsum.photos/seed/c8/200`, lastMessage: 'You: See you later!', timestamp: '10/10/24', unreadCount: 0, isOnline: true },
  ];


  return (
    <div className="bg-slate-900 text-slate-100 font-sans max-w-md w-full mx-auto h-screen flex flex-col shadow-2xl">
      <StoryReel stories={stories} />
      <div className="flex-grow overflow-y-auto bg-white dark:bg-slate-900">
        <ChatList chats={chats} />
      </div>
      <BottomNav />
    </div>
  );
};

export default App;
