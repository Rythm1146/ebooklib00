import { Book, Course, Semester, RecommendedBook } from '../types/library';

// Mock data for development - will be replaced with actual API calls
const MOCK_COURSES: Course[] = [
  { id: 'cs', name: 'Computer Science', code: 'CS' },
  { id: 'ee', name: 'Electrical Engineering', code: 'EE' },
  { id: 'me', name: 'Mechanical Engineering', code: 'ME' },
  { id: 'ce', name: 'Civil Engineering', code: 'CE' },
  { id: 'chem', name: 'Chemical Engineering', code: 'CHEM' },
];

const MOCK_SEMESTERS: Semester[] = [
  { id: 'sem1', name: '1st Semester', order: 1 },
  { id: 'sem2', name: '2nd Semester', order: 2 },
  { id: 'sem3', name: '3rd Semester', order: 3 },
  { id: 'sem4', name: '4th Semester', order: 4 },
  { id: 'sem5', name: '5th Semester', order: 5 },
  { id: 'sem6', name: '6th Semester', order: 6 },
  { id: 'sem7', name: '7th Semester', order: 7 },
  { id: 'sem8', name: '8th Semester', order: 8 },
];

const MOCK_BOOKS: Book[] = [
  {
    id: 'book1',
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    courseId: 'cs',
    courseCode: 'CS101',
    semesterId: 'sem1',
    semester: '1st Semester',
    fileType: 'pdf',
    fileSize: '8.5 MB',
    lastUpdated: '2023-05-12',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1S42eflNCE1T6RxmNC8nreMyeJkJpKuzT',
    previewUrl: 'https://drive.google.com/file/d/1S42eflNCE1T6RxmNC8nreMyeJkJpKuzT/view',
    driveFileId: '1S42eflNCE1T6RxmNC8nreMyeJkJpKuzT',
    tags: ['algorithms', 'programming', 'computer science']
  },
  {
    id: 'book2',
    title: 'Data Structures Using C',
    author: 'Reema Thareja',
    courseId: 'cs',
    courseCode: 'CS102',
    semesterId: 'sem2',
    semester: '2nd Semester',
    fileType: 'pdf',
    fileSize: '12.8 MB',
    lastUpdated: '2023-06-18',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1S42eflNCE1T6RxmNC8nreMyeJkJpKuzT',
    previewUrl: 'https://drive.google.com/file/d/1S42eflNCE1T6RxmNC8nreMyeJkJpKuzT/view',
    driveFileId: '1S42eflNCE1T6RxmNC8nreMyeJkJpKuzT',
    tags: ['data structures', 'c language', 'programming']
  },
  {
    id: 'book3',
    title: 'Electric Circuit Analysis',
    author: 'David E. Johnson',
    courseId: 'ee',
    courseCode: 'EE201',
    semesterId: 'sem1',
    semester: '1st Semester',
    fileType: 'pdf',
    fileSize: '10.2 MB',
    lastUpdated: '2023-04-05',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1S42eflNCE1T6RxmNC8nreMyeJkJpKuzT',
    previewUrl: 'https://drive.google.com/file/d/1S42eflNCE1T6RxmNC8nreMyeJkJpKuzT/view',
    driveFileId: '1S42eflNCE1T6RxmNC8nreMyeJkJpKuzT',
    tags: ['circuits', 'electrical engineering']
  },
  {
    id: 'book4',
    title: 'Materials Science and Engineering',
    author: 'William D. Callister',
    courseId: 'me',
    courseCode: 'ME101',
    semesterId: 'sem1',
    semester: '1st Semester',
    fileType: 'pdf',
    fileSize: '15.3 MB',
    lastUpdated: '2023-03-20',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1S42eflNCE1T6RxmNC8nreMyeJkJpKuzT',
    previewUrl: 'https://drive.google.com/file/d/1S42eflNCE1T6RxmNC8nreMyeJkJpKuzT/view',
    driveFileId: '1S42eflNCE1T6RxmNC8nreMyeJkJpKuzT',
    tags: ['materials', 'engineering', 'mechanical']
  },
  {
    id: 'book5',
    title: 'Database System Concepts',
    author: 'Abraham Silberschatz',
    courseId: 'cs',
    courseCode: 'CS301',
    semesterId: 'sem3',
    semester: '3rd Semester',
    fileType: 'pdf',
    fileSize: '20.1 MB',
    lastUpdated: '2023-02-15',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1S42eflNCE1T6RxmNC8nreMyeJkJpKuzT',
    previewUrl: 'https://drive.google.com/file/d/1S42eflNCE1T6RxmNC8nreMyeJkJpKuzT/view',
    driveFileId: '1S42eflNCE1T6RxmNC8nreMyeJkJpKuzT',
    tags: ['database', 'sql', 'data management']
  },
  {
    id: 'book6',
    title: 'Structural Analysis',
    author: 'R.C. Hibbeler',
    courseId: 'ce',
    courseCode: 'CE201',
    semesterId: 'sem2',
    semester: '2nd Semester',
    fileType: 'pdf',
    fileSize: '18.6 MB',
    lastUpdated: '2023-01-10',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1S42eflNCE1T6RxmNC8nreMyeJkJpKuzT',
    previewUrl: 'https://drive.google.com/file/d/1S42eflNCE1T6RxmNC8nreMyeJkJpKuzT/view',
    driveFileId: '1S42eflNCE1T6RxmNC8nreMyeJkJpKuzT',
    tags: ['structural engineering', 'civil engineering']
  },
];

const MOCK_RECOMMENDED_BOOKS: RecommendedBook[] = [
  {
    id: 'rec1',
    title: 'Computer Organization and Architecture',
    author: 'William Stallings',
    isbn: '978-0134997193',
    courseId: 'cs',
    semesterId: 'sem1',
    description: 'A comprehensive guide to computer organization and architecture, covering digital logic, computer arithmetic, and memory hierarchy.',
    purchaseLink: 'https://www.amazon.com/Computer-Organization-Architecture-William-Stallings/dp/0134997190'
  },
  {
    id: 'rec2',
    title: 'Operating System Concepts',
    author: 'Abraham Silberschatz',
    isbn: '978-1119456339',
    courseId: 'cs',
    semesterId: 'sem3',
    description: 'Known as the "dinosaur book," this text provides a solid theoretical foundation for understanding operating systems.',
    purchaseLink: 'https://www.amazon.com/Operating-System-Concepts-Abraham-Silberschatz/dp/1119456339'
  },
  {
    id: 'rec3',
    title: 'Electric Machinery and Power System Fundamentals',
    author: 'Stephen J. Chapman',
    isbn: '978-0071226202',
    courseId: 'ee',
    semesterId: 'sem1',
    description: 'This book provides a comprehensive introduction to electrical machines and power systems.',
    purchaseLink: 'https://www.amazon.com/Electric-Machinery-Fundamentals-Stephen-Chapman/dp/0071226202'
  },
  {
    id: 'rec4',
    title: 'Mechanics of Materials',
    author: 'Russell C. Hibbeler',
    isbn: '978-0134319650',
    courseId: 'me',
    semesterId: 'sem1',
    description: 'Presents the theory and practice of mechanics of materials in a straight-forward, student-friendly manner.',
    purchaseLink: 'https://www.amazon.com/Mechanics-Materials-Russell-C-Hibbeler/dp/0134319656'
  }
];

// Simulate API fetch calls with promises and delays
const simulateFetch = <T>(data: T, delay = 700): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delay);
  });
};

// API functions
export const fetchBooks = async (): Promise<Book[]> => {
  try {
    // In a real application, this would be an API call to fetch books from Google Drive
    return await simulateFetch(MOCK_BOOKS);
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export const fetchCourses = async (): Promise<Course[]> => {
  try {
    // In a real application, this would be an API call to fetch courses
    return await simulateFetch(MOCK_COURSES, 300);
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};

export const fetchSemesters = async (): Promise<Semester[]> => {
  try {
    // In a real application, this would be an API call to fetch semesters
    return await simulateFetch(MOCK_SEMESTERS, 200);
  } catch (error) {
    console.error('Error fetching semesters:', error);
    throw error;
  }
};

export const fetchRecommendedBooks = async (courseId: string, semesterId: string): Promise<RecommendedBook[]> => {
  try {
    // In a real application, this would be an API call to fetch recommended books based on course and semester
    const filtered = MOCK_RECOMMENDED_BOOKS.filter(
      (book) => book.courseId === courseId && book.semesterId === semesterId
    );
    return await simulateFetch(filtered, 500);
  } catch (error) {
    console.error('Error fetching recommended books:', error);
    throw error;
  }
};

// Google Drive API integration
// In a real application, you would implement these functions using the Google Drive API
export const fetchFilesFromDrive = async (folderId: string): Promise<any[]> => {
  // This would be implemented using the Google Drive API
  // For now, we're returning mock data
  console.log('Fetching files from Google Drive folder:', folderId);
  return simulateFetch([], 1000);
};