import React, { useEffect } from 'react';
import { User } from './mock-data';

interface UserModalProps {
  user: User;
  onClose: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ user, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 transition-opacity duration-300 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="user-modal-title"
    >
      <div
        className="bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 text-center transform transition-transform duration-300 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-pink-500 shadow-lg"
          src={user.imageUrl}
          alt={`${user.name}'s profile`}
        />
        <h2 id="user-modal-title" className="text-3xl font-bold text-white mb-2">{user.name}</h2>
        <p className="text-gray-400 mb-6">{user.email}</p>
        
        <div className="text-left">
            <h3 className="text-lg font-semibold text-white mb-3">Interests</h3>
            <div className="flex flex-wrap gap-2">
                {user.interests.map((interest, index) => (
                    <span key={index} className="bg-gray-700 text-purple-300 text-sm font-medium px-3 py-1 rounded-full">
                        {interest}
                    </span>
                ))}
            </div>
        </div>
      </div>
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
          }
          @keyframes scale-in {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .animate-scale-in {
            animation: scale-in 0.3s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default UserModal;