import React, { createContext, useContext, useState, useEffect } from 'react';
import { Book, Course, Semester, RecommendedBook } from '../types/library';
import { fetchBooks, fetchCourses, fetchSemesters, fetchRecommendedBooks } from '../services/libraryService';

interface LibraryContextType {
  books: Book[];
  filteredBooks: Book[];
  courses: Course[];
  semesters: Semester[];
  recommendedBooks: RecommendedBook[];
  selectedCourse: string | null;
  selectedSemester: string | null;
  downloadProgress: number;
  isLoading: boolean;
  setSelectedCourse: (courseId: string | null) => void;
  setSelectedSemester: (semesterId: string | null) => void;
  setDownloadProgress: (progress: number) => void;
}

const LibraryContext = createContext<LibraryContextType | undefined>(undefined);

export const LibraryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [semesters, setSemesters] = useState<Semester[]>([]);
  const [recommendedBooks, setRecommendedBooks] = useState<RecommendedBook[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<string | null>(null);
  const [downloadProgress, setDownloadProgress] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fetch initial data
  useEffect(() => {
    const loadInitialData = async () => {
      setIsLoading(true);
      try {
        const [coursesData, semestersData, booksData] = await Promise.all([
          fetchCourses(),
          fetchSemesters(),
          fetchBooks()
        ]);
        
        setCourses(coursesData);
        setSemesters(semestersData);
        setBooks(booksData);
      } catch (error) {
        console.error('Error loading initial data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadInitialData();
  }, []);

  // Fetch recommended books when course or semester changes
  useEffect(() => {
    const loadRecommendedBooks = async () => {
      if (!selectedCourse || !selectedSemester) {
        setRecommendedBooks([]);
        return;
      }
      
      try {
        const recommendations = await fetchRecommendedBooks(selectedCourse, selectedSemester);
        setRecommendedBooks(recommendations);
      } catch (error) {
        console.error('Error loading recommended books:', error);
        setRecommendedBooks([]);
      }
    };
    
    loadRecommendedBooks();
  }, [selectedCourse, selectedSemester]);

  // Filter books based on selected course and semester
  const filteredBooks = books.filter((book) => {
    const matchesCourse = !selectedCourse || book.courseId === selectedCourse;
    const matchesSemester = !selectedSemester || book.semesterId === selectedSemester;
    return matchesCourse && matchesSemester;
  });

  return (
    <LibraryContext.Provider
      value={{
        books,
        filteredBooks,
        courses,
        semesters,
        recommendedBooks,
        selectedCourse,
        selectedSemester,
        downloadProgress,
        isLoading,
        setSelectedCourse,
        setSelectedSemester,
        setDownloadProgress
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibraryContext = () => {
  const context = useContext(LibraryContext);
  if (context === undefined) {
    throw new Error('useLibraryContext must be used within a LibraryProvider');
  }
  return context;
};