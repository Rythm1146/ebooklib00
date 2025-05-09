import React from 'react';
import { BookOpenCheck } from 'lucide-react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import BookList from './components/BookList';
import RecommendationPanel from './components/RecommendationPanel';
import { LibraryProvider } from './context/LibraryContext';
import './fonts.css';

function App() {
  return (
    <LibraryProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col font-calibri">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6 md:py-8">
          <FilterBar />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <div className="lg:col-span-2">
              <BookList />
            </div>
            <div className="lg:col-span-1">
              <RecommendationPanel />
            </div>
          </div>
        </main>
        <footer className="bg-blue-900 text-white py-6">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <BookOpenCheck className="mr-2" />
                <span className="text-lg font-semibold">Student E-Library</span>
              </div>
              <div className="text-sm font-calibri">
                Project By- Kshitij Sinha, Akshit Yadav
              </div>
            </div>
          </div>
        </footer>
      </div>
    </LibraryProvider>
  );
}

export default App;