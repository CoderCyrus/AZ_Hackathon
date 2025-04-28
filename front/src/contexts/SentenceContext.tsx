import React, { createContext, useState, useEffect, useContext } from 'react';
import { SentenceData, SentenceContextType } from '../types';

const SentenceContext = createContext<SentenceContextType | undefined>(undefined);

export const SentenceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSentence, setCurrentSentence] = useState<SentenceData | null>(() => {
    const saved = localStorage.getItem('currentSentence');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (currentSentence) {
      localStorage.setItem('currentSentence', JSON.stringify(currentSentence));
    }
  }, [currentSentence]);

  const setSentence = async (content: string) => {
    const newSentence: SentenceData = {
      id: crypto.randomUUID(),
      content,
      timestamp: Date.now(),
    };
    setCurrentSentence(newSentence);
  };

  return (
    <SentenceContext.Provider value={{ currentSentence, setSentence }}>
      {children}
    </SentenceContext.Provider>
  );
};

export const useSentenceContext = () => {
  const context = useContext(SentenceContext);
  if (context === undefined) {
    throw new Error('useSentenceContext must be used within a SentenceProvider');
  }
  return context;
};