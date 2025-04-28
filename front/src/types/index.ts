export interface SentenceData {
  id: string;
  content: string;
  timestamp: number;
}

export interface SentenceContextType {
  currentSentence: SentenceData | null;
  setSentence: (content: string) => void;
}