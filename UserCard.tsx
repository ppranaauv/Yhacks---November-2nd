import React from 'react';
import { User } from './mock-data';

interface UserCardProps {
  user: User;
  onCardClick: (user: User) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onCardClick }) => {
  return (
    <div 
      className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
      onClick={() => onCardClick(user)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onCardClick(user)}
      aria-label={`View details for ${user.name}`}
    >
      <img
        className="w-24 h-24 rounded-full mb-4 border-4 border-purple-500"
        src={user.imageUrl}
        alt={`${user.name}'s profile`}
      />
      <h2 className="text-xl font-bold text-white">{user.name}</h2>
      <p className="text-gray-400">{user.email}</p>
    </div>
  );
};

export default UserCard;