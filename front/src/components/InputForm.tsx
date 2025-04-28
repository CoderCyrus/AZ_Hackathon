import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useSentenceContext } from '../contexts/SentenceContext';

const InputForm: React.FC = () => {
  const [input, setInput] = useState('');
  const { setSentence } = useSentenceContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setSentence(input.trim());
      setInput('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="w-full max-w-2xl mx-auto mt-4 relative"
    >
      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Want to play guitar for 30 hours? Enter a motivational sentence..."
          className="w-full bg-white rounded-full border border-gray-300 py-3 px-6 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          disabled={!input.trim()}
        >
          <Send size={18} />
        </button>
      </div>
    </form>
  );
};

export default InputForm;