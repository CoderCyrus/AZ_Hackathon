import React from 'react';
import { SentenceProvider } from './contexts/SentenceContext';
import Layout from './components/Layout';
import InputForm from './components/InputForm';
import SentenceDisplay from './components/SentenceDisplay';

function App() {
  return (
    <SentenceProvider>
      <Layout>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-light text-center mb-6 text-gray-700 max-w-2xl">
            Tell me what you're working on and I'll keep you motivated.
          </h2>
          <InputForm />
          <SentenceDisplay />
        </div>
      </Layout>
    </SentenceProvider>
  );
}

export default App;