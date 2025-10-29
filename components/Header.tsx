
import React from 'react';
import { SearchIcon } from './icons/SearchIcon';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-slate-900 sticky top-0 z-10">
      <h1 className="text-2xl font-bold text-slate-100">پیام‌ها</h1>
      <button className="p-2 rounded-full hover:bg-slate-800 transition-colors">
        <SearchIcon className="w-6 h-6 text-slate-400" />
      </button>
    </header>
  );
};

export default Header;
