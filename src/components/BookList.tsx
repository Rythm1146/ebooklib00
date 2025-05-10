import React, { useState } from 'react';
import { Download, FileText, BookOpen, Package } from 'lucide-react';
import { useLibraryContext } from '../context/LibraryContext';
import { downloadAllMaterials } from '../services/downloadService';
import BookCard from './BookCard';

const BookList: React.FC = () => {
  const { filteredBooks, isLoading, downloadProgress, selectedCourse, selectedSemester } = useLibraryContext();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadAll = async () => {
    if (filteredBooks.length === 0) return;
    
    setIsDownloading(true);
    try {
      await downloadAllMaterials(filteredBooks, selectedCourse, selectedSemester);
    } catch (error) {
      console.error('Error downloading materials:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-blue-900">
          Available Materials
          {(selectedCourse || selectedSemester) && (
            <span className="text-sm font-normal text-gray-500 ml-2">
              {filteredBooks.length} item{filteredBooks.length !== 1 ? 's' : ''}
            </span>
          )}
        </h2>
        <button
          onClick={handleDownloadAll}
          disabled={filteredBooks.length === 0 || isDownloading}
          className={`flex items-center px-4 py-2 rounded-md text-white ${
            filteredBooks.length === 0 || isDownloading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 transition-colors hover:shadow-lg hover:animate-pulse'
          }`}
        >
          {isDownloading ? (
            <>
              <Package size={18} className="mr-2 animate-pulse" />
              Packaging...
            </>
          ) : (
            <>
              <Download size={18} className="mr-2" />
              Download All
            </>
          )}
        </button>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-64">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600">Loading materials...</p>
        </div>
      ) : filteredBooks.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 text-center">
          <FileText size={48} className="text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-600 mb-2">No materials found</h3>
          <p className="text-gray-500 max-w-md">
            {selectedCourse || selectedSemester
              ? 'Try changing your filters or selecting a different course/semester.'
              : 'Select a course and semester to view available materials.'}
          </p>
        </div>
      ) : (
        <>
          {downloadProgress > 0 && downloadProgress < 100 && (
            <div className="mb-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${downloadProgress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">Downloading: {downloadProgress}%</p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BookList;