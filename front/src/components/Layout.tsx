import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="container mx-auto px-4 py-6 border-t border-gray-200 mt-12">
        <p className="text-center text-sm text-gray-500">
          Sentences refresh every 15 minutes or click refresh to update now
        </p>
      </footer>
    </div>
  );
};

export default Layout;