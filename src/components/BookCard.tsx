import React, { useState } from 'react';
import { BookOpen, Download, FileText, ExternalLink, Info } from 'lucide-react';
import { Book } from '../types/library';
import { downloadMaterial } from '../services/downloadService';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const getFileIcon = () => {
    const fileType = book.fileType.toLowerCase();
    if (fileType === 'pdf') return <FileText size={18} className="text-red-500" />;
    if (fileType === 'ppt' || fileType === 'pptx') return <FileText size={18} className="text-orange-500" />;
    if (fileType === 'doc' || fileType === 'docx') return <FileText size={18} className="text-blue-500" />;
    return <BookOpen size={18} className="text-green-500" />;
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await downloadMaterial(book);
    } catch (error) {
      console.error('Error downloading material:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div 
      className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
    >
      <div className="p-4">
        <div className="flex items-start mb-2">
          <div className="p-2 bg-blue-50 rounded-md mr-3">
            {getFileIcon()}
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 line-clamp-1">{book.title}</h3>
            <p className="text-sm text-gray-500">{book.courseCode} • {book.semester}</p>
          </div>
        </div>
        
        {showDetails && (
          <div className="my-3 text-sm text-gray-600 animate-fadeIn">
            <p className="mb-1"><span className="font-medium">Author:</span> {book.author || 'Not specified'}</p>
            <p className="mb-1"><span className="font-medium">Type:</span> {book.fileType.toUpperCase()}</p>
            <p className="mb-1"><span className="font-medium">Size:</span> {book.fileSize}</p>
            <p><span className="font-medium">Last updated:</span> {book.lastUpdated}</p>
          </div>
        )}
        
        <div className="flex justify-between items-center mt-3 text-sm">
          <button 
            className="text-blue-600 hover:text-blue-800 transition-colors flex items-center"
            onClick={() => setShowDetails(!showDetails)}
          >
            <Info size={16} className="mr-1" />
            {showDetails ? 'Hide Details' : 'View Details'}
          </button>
          <div className="flex items-center space-x-2">
            <a 
              href={book.previewUrl} 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ExternalLink size={16} />
            </a>
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className={`flex items-center px-3 py-1 rounded ${
                isDownloading
                  ? 'bg-gray-200 text-gray-600 cursor-not-allowed'
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors'
              }`}
            >
              <Download size={16} className={`mr-1 ${isDownloading ? 'animate-bounce' : ''}`} />
              {isDownloading ? 'Downloading...' : 'Download'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;