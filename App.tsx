import React, { useState } from 'react';
import { users, User } from './mock-data';
import UserCard from './UserCard';
import UserModal from './UserModal';

const App: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleCardClick = (user: User) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
          User Directory
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          A list of our awesome users. Click on a card to learn more.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {users.map((user) => (
          <UserCard key={user.id} user={user} onCardClick={handleCardClick} />
        ))}
      </div>
      {selectedUser && (
        <UserModal user={selectedUser} onClose={handleCloseModal} />
      )}
      <style>
        {`
          @keyframes gradient-x {
            0%, 100% {
              background-size: 200% 200%;
              background-position: left center;
            }
            50% {
              background-size: 200% 200%;
              background-position: right center;
            }
          }
          .animate-gradient-x {
            animation: gradient-x 5s ease infinite;
          }
        `}
      </style>
    </div>
  );
};

export default App;