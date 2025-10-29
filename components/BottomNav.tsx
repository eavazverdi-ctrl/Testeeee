
import React, { useState } from 'react';
import { ChatBubbleIcon } from './icons/ChatBubbleIcon';
import { CallIcon } from './icons/CallIcon';
import { StatusIcon } from './icons/StatusIcon';
import { SettingsIcon } from './icons/SettingsIcon';

interface NavItemProps {
  icon: React.ReactElement;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive = false, onClick }) => {
  if (isActive) {
    return (
      <button 
        onClick={onClick}
        className="bg-blue-500 rounded-full px-5 py-2.5 flex items-center space-x-2 space-x-reverse text-white shadow-md transform transition-transform duration-200 ease-in-out hover:scale-105"
      >
        {React.cloneElement(icon, { className: "w-6 h-6", active: "true" })}
        <span className="text-sm font-semibold">{label}</span>
      </button>
    );
  }

  return (
    <button onClick={onClick} className="p-3 text-gray-500 hover:text-blue-500 transition-colors duration-200">
      {React.cloneElement(icon, { className: "w-7 h-7" })}
    </button>
  );
};


const BottomNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Chats');
  
  const navItems = [
    { id: 'Chats', label: 'Chats', icon: <ChatBubbleIcon /> },
    { id: 'Calls', label: 'Calls', icon: <CallIcon /> },
    { id: 'Status', label: 'Status', icon: <StatusIcon /> },
    { id: 'Settings', label: 'Settings', icon: <SettingsIcon /> },
  ];

  return (
    <nav className="px-6 pb-6 pt-3 mt-auto bg-slate-900 flex-shrink-0">
      <div className="bg-white/80 dark:bg-slate-800/60 backdrop-blur-lg rounded-full flex justify-around items-center h-16 shadow-lg ring-1 ring-black/5">
        {navItems.map(item => (
            <NavItem 
                key={item.id}
                icon={item.icon}
                label={item.label}
                isActive={activeTab === item.id}
                onClick={() => setActiveTab(item.id)}
            />
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
