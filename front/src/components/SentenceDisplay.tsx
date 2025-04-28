import React from 'react';
import { useSentenceContext } from '../contexts/SentenceContext';

const SentenceDisplay: React.FC = () => {
  const { currentSentence } = useSentenceContext();
  
  if (!currentSentence) {
    return (
      <div className="mt-12 text-center text-gray-500">
        Enter your motivational sentence above to get started!
      </div>
    );
  }
  
  return (
    <div className="mt-12 w-full max-w-3xl mx-auto">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 shadow-lg">
        <p className="text-2xl md:text-3xl text-gray-800 font-light text-center leading-relaxed">
          {currentSentence.content}
        </p>
      </div>
    </div>
  );
};

export default SentenceDisplay;