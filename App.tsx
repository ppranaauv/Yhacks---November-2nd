import React, { useState } from 'react';
import { users, User } from './mock-data';
import UserCard from './UserCard';
import UserModal from './UserModal';

const App: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCardClick = (user: User) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      
      <div className="max-w-lg mx-auto mb-8">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by name..."
          className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow duration-300"
          aria-label="Search for a user by name"
        />
      </div>

      {filteredUsers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} onCardClick={handleCardClick} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400 mt-12">
          <p className="text-xl">No users found.</p>
        </div>
      )}

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
