
import React from 'react';
import type { Story } from '../types';
import { PlusIcon } from './icons/PlusIcon';
import { VerifiedIcon } from './icons/VerifiedIcon';
import { ThreeDotsIcon } from './icons/ThreeDotsIcon';
import { SearchIcon } from './icons/SearchIcon';
import { FilterIcon } from './icons/FilterIcon';

interface StoryReelProps {
  stories: Story[];
}

const StoryItem: React.FC<{ story: Story }> = ({ story }) => {
  if (story.isCurrentUser) {
    return (
      <div className="flex flex-col items-center space-y-2 flex-shrink-0 w-24 text-center">
        <div className="w-20 h-20 rounded-full border-2 border-dashed border-white flex items-center justify-center cursor-pointer hover:border-gray-300 transition-colors">
          <PlusIcon className="w-8 h-8 text-white" />
        </div>
        <span className="text-sm text-white font-medium">{story.username}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-2 flex-shrink-0 w-24 text-center">
      <div className="p-1 bg-white rounded-full cursor-pointer">
        <img
          className="w-18 h-18 rounded-full object-cover"
          src={story.avatarUrl}
          alt={story.username}
        />
      </div>
      <div className="flex items-center justify-center space-x-1 space-x-reverse">
        <span className="text-sm text-white truncate">{story.username}</span>
        {story.isVerified && <VerifiedIcon className="w-4 h-4 flex-shrink-0" />}
      </div>
    </div>
  );
};


const StoryReel: React.FC<StoryReelProps> = ({ stories }) => {
  return (
    <div className="bg-gradient-to-b from-[#49AAFF] to-[#188BEF] p-4 rounded-b-[2.5rem] shadow-lg flex-shrink-0">
      <div className="flex justify-between items-center mb-6 text-white px-2">
        <h2 className="text-xl font-bold">All Story</h2>
        <button className="focus:outline-none">
          <ThreeDotsIcon className="w-6 h-6" />
        </button>
      </div>
      
      <div className="flex space-x-2 space-x-reverse overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
        {stories.map((story) => (
          <StoryItem key={story.id} story={story} />
        ))}
      </div>

      <div className="relative mt-2">
        <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <SearchIcon className="w-5 h-5 text-gray-400" />
        </span>
        <input 
          type="text" 
          placeholder="Select or search for recent chats..." 
          className="w-full bg-white rounded-full py-3 pr-11 pl-12 text-gray-800 placeholder-gray-500/90 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
        />
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
           <button className="bg-blue-100/70 p-1.5 rounded-full focus:outline-none hover:bg-blue-200/70">
            <FilterIcon className="w-5 h-5 text-[#16A1FB]" />
           </button>
        </span>
      </div>
    </div>
  );
};

export default StoryReel;
