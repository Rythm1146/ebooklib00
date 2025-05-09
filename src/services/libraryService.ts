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

const C_BOOKS: Book[] = [
  {
    id: 'book10',
    title: 'Engineering Mathematics – I',
    author: 'Grewal B.S.',
    courseId: 'cs',
    courseCode: 'CS101',
    semesterId: 'sem1',
    semester: '1st Semester',
    fileType: 'pdf',
    fileSize: '15.8 MB',
    lastUpdated: '2024-03-20',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1jruVndkguv7OTUMsbXYvYgMjcZFskJ5y',
    previewUrl: 'https://drive.google.com/file/d/1jruVndkguv7OTUMsbXYvYgMjcZFskJ5y/view',
    driveFileId: '1jruVndkguv7OTUMsbXYvYgMjcZFskJ5y',
    tags: ['mathematics', 'engineering', 'calculus']
  },
  {
    id: 'book11',
    title: 'Let Us C',
    author: 'Yashavant Kanetkar',
    courseId: 'cs',
    courseCode: 'CS201',
    semesterId: 'sem2',
    semester: '2nd Semester',
    fileType: 'pdf',
    fileSize: '12.3 MB',
    lastUpdated: '2024-03-20',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1l_0ca8HMqsvL7xnz48RqDLCCg5ilm9ns',
    previewUrl: 'https://drive.google.com/file/d/1l_0ca8HMqsvL7xnz48RqDLCCg5ilm9ns/view',
    driveFileId: '1l_0ca8HMqsvL7xnz48RqDLCCg5ilm9ns',
    tags: ['programming', 'c language', 'computer science']
  },
  {
    id: 'book12',
    title: 'Computer Organization & Design',
    author: 'Patterson & Hennessy',
    courseId: 'cs',
    courseCode: 'CS301',
    semesterId: 'sem3',
    semester: '3rd Semester',
    fileType: 'pdf',
    fileSize: '18.5 MB',
    lastUpdated: '2024-03-20',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=14RTikpdRYGSK1pZiYy_lLUxpYGZelpJH',
    previewUrl: 'https://drive.google.com/file/d/14RTikpdRYGSK1pZiYy_lLUxpYGZelpJH/view',
    driveFileId: '14RTikpdRYGSK1pZiYy_lLUxpYGZelpJH',
    tags: ['computer architecture', 'hardware', 'design']
  },
  {
    id: 'book13',
    title: 'Operating System Concepts',
    author: 'Silberschatz',
    courseId: 'cs',
    courseCode: 'CS401',
    semesterId: 'sem4',
    semester: '4th Semester',
    fileType: 'pdf',
    fileSize: '20.1 MB',
    lastUpdated: '2024-03-20',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1XoORKiR-ioQZzccT8ayGt1eEoAvC6ie5',
    previewUrl: 'https://drive.google.com/file/d/1XoORKiR-ioQZzccT8ayGt1eEoAvC6ie5/view',
    driveFileId: '1XoORKiR-ioQZzccT8ayGt1eEoAvC6ie5',
    tags: ['operating systems', 'computer science', 'systems']
  },
  {
    id: 'book14',
    title: 'Basic Electrical Engineering',
    author: 'Nagrath & Kothari',
    courseId: 'ee',
    courseCode: 'EE101',
    semesterId: 'sem1',
    semester: '1st Semester',
    fileType: 'pdf',
    fileSize: '16.2 MB',
    lastUpdated: '2024-03-20',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1me6CLkY4Sto6EbcgXTNwXtFkEgPCiXEP',
    previewUrl: 'https://drive.google.com/file/d/1me6CLkY4Sto6EbcgXTNwXtFkEgPCiXEP/view',
    driveFileId: '1me6CLkY4Sto6EbcgXTNwXtFkEgPCiXEP',
    tags: ['electrical', 'engineering', 'basics']
  },
  {
    id: 'book15',
    title: 'Engineering Circuit Analysis',
    author: 'Hayt & Kemmerly',
    courseId: 'ee',
    courseCode: 'EE201',
    semesterId: 'sem2',
    semester: '2nd Semester',
    fileType: 'pdf',
    fileSize: '14.8 MB',
    lastUpdated: '2024-03-20',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1VneGFhNI7-yeoo_asW-Nff6g-gX_caqV',
    previewUrl: 'https://drive.google.com/file/d/1VneGFhNI7-yeoo_asW-Nff6g-gX_caqV/view',
    driveFileId: '1VneGFhNI7-yeoo_asW-Nff6g-gX_caqV',
    tags: ['circuits', 'electrical', 'analysis']
  },
  {
    id: 'book16',
    title: 'Thermodynamics: An Engineering Approach',
    author: 'Cengel & Boles',
    courseId: 'me',
    courseCode: 'ME101',
    semesterId: 'sem1',
    semester: '1st Semester',
    fileType: 'pdf',
    fileSize: '18.5 MB',
    lastUpdated: '2024-03-20',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1FDJJ3M83o59Z6nPK-oyoRcmzN4pq23gA',
    previewUrl: 'https://drive.google.com/file/d/1FDJJ3M83o59Z6nPK-oyoRcmzN4pq23gA/view',
    driveFileId: '1FDJJ3M83o59Z6nPK-oyoRcmzN4pq23gA',
    tags: ['thermodynamics', 'mechanical', 'engineering']
  },
  {
    id: 'book17',
    title: 'Engineering Mechanics',
    author: 'R.C. Hibbeler',
    courseId: 'me',
    courseCode: 'ME201',
    semesterId: 'sem2',
    semester: '2nd Semester',
    fileType: 'pdf',
    fileSize: '15.7 MB',
    lastUpdated: '2024-03-20',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1Ye9-QDDYehD89KHencGm8HJK29sw3brs',
    previewUrl: 'https://drive.google.com/file/d/1Ye9-QDDYehD89KHencGm8HJK29sw3brs/view',
    driveFileId: '1Ye9-QDDYehD89KHencGm8HJK29sw3brs',
    tags: ['mechanics', 'engineering', 'physics']
  },
  {
    id: 'book18',
    title: 'Structural Analysis',
    author: 'R.C. Hibbeler',
    courseId: 'ce',
    courseCode: 'CE101',
    semesterId: 'sem1',
    semester: '1st Semester',
    fileType: 'pdf',
    fileSize: '17.3 MB',
    lastUpdated: '2024-03-20',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1FozwOtzIkbKOhsl_MuIM1hj161RQCDpq',
    previewUrl: 'https://drive.google.com/file/d/1FozwOtzIkbKOhsl_MuIM1hj161RQCDpq/view',
    driveFileId: '1FozwOtzIkbKOhsl_MuIM1hj161RQCDpq',
    tags: ['structural', 'civil', 'analysis']
  },
  {
    id: 'book19',
    title: 'Basic Civil Engineering',
    author: 'Satheesh Gopi',
    courseId: 'ce',
    courseCode: 'CE201',
    semesterId: 'sem2',
    semester: '2nd Semester',
    fileType: 'pdf',
    fileSize: '13.9 MB',
    lastUpdated: '2024-03-20',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=114nBz7joO6wP3CzliSnAqG1jzmaGX-uk',
    previewUrl: 'https://drive.google.com/file/d/114nBz7joO6wP3CzliSnAqG1jzmaGX-uk/view',
    driveFileId: '114nBz7joO6wP3CzliSnAqG1jzmaGX-uk',
    tags: ['civil', 'engineering', 'basics']
  },
  {
    id: 'book20',
    title: 'Elementary Principles of Chemical Processes',
    author: 'Felder & Rousseau',
    courseId: 'chem',
    courseCode: 'CHEM101',
    semesterId: 'sem1',
    semester: '1st Semester',
    fileType: 'pdf',
    fileSize: '19.2 MB',
    lastUpdated: '2024-03-20',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1NjFBYcPDy5DSeC31lxjln98fnZkuBnaB',
    previewUrl: 'https://drive.google.com/file/d/1NjFBYcPDy5DSeC31lxjln98fnZkuBnaB/view',
    driveFileId: '1NjFBYcPDy5DSeC31lxjln98fnZkuBnaB',
    tags: ['chemical', 'processes', 'engineering']
  },
  {
    id: 'book21',
    title: 'Chemical Reaction Engineering',
    author: 'Octave Levenspiel',
    courseId: 'chem',
    courseCode: 'CHEM201',
    semesterId: 'sem2',
    semester: '2nd Semester',
    fileType: 'pdf',
    fileSize: '16.8 MB',
    lastUpdated: '2024-03-20',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1vSFji3mYJaSSkslSyfPG2SCe-9Z3ga8E',
    previewUrl: 'https://drive.google.com/file/d/1vSFji3mYJaSSkslSyfPG2SCe-9Z3ga8E/view',
    driveFileId: '1vSFji3mYJaSSkslSyfPG2SCe-9Z3ga8E',
    tags: ['chemical', 'reactions', 'engineering']
  }
];

const OFF_BOOK: RecommendedBook[] = [
  {
    id: 'rec1',
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    isbn: '978-0262033848',
    courseId: 'cs',
    semesterId: 'sem1',
    description: 'A comprehensive introduction to algorithms, covering a broad range of fundamental algorithms in depth, making them accessible to all levels of readers.',
    purchaseLink: 'https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844'
  },
  {
    id: 'rec2',
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    isbn: '978-0262033848',
    courseId: 'cs',
    semesterId: 'sem2',
    description: 'A comprehensive introduction to algorithms, covering a broad range of fundamental algorithms in depth, making them accessible to all levels of readers.',
    purchaseLink: 'https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844'
  },
  {
    id: 'rec3',
    title: 'Electric Machinery Fundamentals',
    author: 'Stephen J. Chapman',
    isbn: '978-0073529547',
    courseId: 'ee',
    semesterId: 'sem1',
    description: 'A comprehensive introduction to electrical machines and power systems, covering both theory and practical applications.',
    purchaseLink: 'https://www.amazon.com/Electric-Machinery-Fundamentals-Stephen-Chapman/dp/0073529540'
  },
  {
    id: 'rec4',
    title: 'Electric Machinery Fundamentals',
    author: 'Stephen J. Chapman',
    isbn: '978-0073529547',
    courseId: 'ee',
    semesterId: 'sem2',
    description: 'A comprehensive introduction to electrical machines and power systems, covering both theory and practical applications.',
    purchaseLink: 'https://www.amazon.com/Electric-Machinery-Fundamentals-Stephen-Chapman/dp/0073529540'
  },
  {
    id: 'rec5',
    title: "Shigley's Mechanical Engineering Design",
    author: 'Richard G. Budynas',
    isbn: '978-0073398204',
    courseId: 'me',
    semesterId: 'sem1',
    description: 'A comprehensive textbook covering the principles and practices of mechanical engineering design, including stress analysis, fatigue, and machine elements.',
    purchaseLink: 'https://www.amazon.com/Shigleys-Mechanical-Engineering-Design-Budynas/dp/0073398209'
  },
  {
    id: 'rec6',
    title: "Shigley's Mechanical Engineering Design",
    author: 'Richard G. Budynas',
    isbn: '978-0073398204',
    courseId: 'me',
    semesterId: 'sem2',
    description: 'A comprehensive textbook covering the principles and practices of mechanical engineering design, including stress analysis, fatigue, and machine elements.',
    purchaseLink: 'https://www.amazon.com/Shigleys-Mechanical-Engineering-Design-Budynas/dp/0073398209'
  },
  {
    id: 'rec7',
    title: 'Design of Concrete Structures',
    author: 'Arthur H. Nilson',
    isbn: '978-0073293493',
    courseId: 'ce',
    semesterId: 'sem1',
    description: 'A comprehensive guide to the design of concrete structures, covering both theory and practical applications in structural engineering.',
    purchaseLink: 'https://www.amazon.com/Design-Concrete-Structures-Arthur-Nilson/dp/0073293490'
  },
  {
    id: 'rec8',
    title: 'Design of Concrete Structures',
    author: 'Arthur H. Nilson',
    isbn: '978-0073293493',
    courseId: 'ce',
    semesterId: 'sem2',
    description: 'A comprehensive guide to the design of concrete structures, covering both theory and practical applications in structural engineering.',
    purchaseLink: 'https://www.amazon.com/Design-Concrete-Structures-Arthur-Nilson/dp/0073293490'
  },
  {
    id: 'rec9',
    title: "Perry's Chemical Engineers' Handbook",
    author: 'Don W. Green',
    isbn: '978-0071422949',
    courseId: 'chem',
    semesterId: 'sem1',
    description: 'The definitive reference for chemical engineering professionals, covering all aspects of chemical engineering processes, equipment, and operations.',
    purchaseLink: 'https://www.amazon.com/Perrys-Chemical-Engineers-Handbook-Eighth/dp/0071422943'
  },
  {
    id: 'rec10',
    title: "Perry's Chemical Engineers' Handbook",
    author: 'Don W. Green',
    isbn: '978-0071422949',
    courseId: 'chem',
    semesterId: 'sem2',
    description: 'The definitive reference for chemical engineering professionals, covering all aspects of chemical engineering processes, equipment, and operations.',
    purchaseLink: 'https://www.amazon.com/Perrys-Chemical-Engineers-Handbook-Eighth/dp/0071422943'
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
    return await simulateFetch(C_BOOKS);
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
    const filtered = OFF_BOOK.filter(
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