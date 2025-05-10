import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { useLibraryContext } from '../context/LibraryContext';

const RecommendationPanel: React.FC = () => {
  const { recommendedBooks, selectedCourse, selectedSemester } = useLibraryContext();
  
  if (!selectedCourse || !selectedSemester) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 h-full">
        <h2 className="text-xl font-semibold text-blue-900 mb-4">Offline Book Recommendations</h2>
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <BookOpen size={32} className="text-blue-500 mx-auto mb-2" />
          <p className="text-gray-600">
            Select a course and semester to see recommended offline books.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-full">
      <h2 className="text-xl font-semibold text-blue-900 mb-4">Offline Book Recommendations</h2>
      
      {recommendedBooks.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <BookOpen size={32} className="text-gray-400 mx-auto mb-2" />
          <p className="text-gray-600">
            No offline book recommendations available for this selection.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {recommendedBooks.map((book) => (
            <div key={book.id} className="border border-gray-200 rounded-lg p-3 transition-all duration-300 hover:shadow-sm">
              <h3 className="font-medium text-gray-900">{book.title}</h3>
              <p className="text-sm text-gray-500 mb-2">by {book.author}</p>
              <div className="flex items-center text-sm text-gray-600 mb-3">
                <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs">
                  ISBN: {book.isbn}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{book.description}</p>
              {book.purchaseLink && (
                <a 
                  href={book.purchaseLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ExternalLink size={14} className="mr-1" />
                  Where to buy
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendationPanel;