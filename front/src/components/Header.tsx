import React from 'react';
import { MessageSquare } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 border-b border-gray-200">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-2 rounded-lg mr-3">
            <MessageSquare size={24} className="text-white" />
          </div>
          <h1 className="text-xl font-medium text-gray-800">AI Binome</h1>
        </div>
        <div className="text-sm text-gray-500 hidden md:block">
          Your motivational companion
        </div>
      </div>
    </header>
  );
};

export default Header;