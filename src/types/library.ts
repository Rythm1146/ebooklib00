export interface Book {
  id: string;
  title: string;
  author?: string;
  courseId: string;
  courseCode: string;
  semesterId: string;
  semester: string;
  fileType: string;
  fileSize: string;
  lastUpdated: string;
  downloadUrl: string;
  previewUrl: string;
  driveFileId: string;
  tags?: string[];
}

export interface Course {
  id: string;
  name: string;
  code: string;
}

export interface Semester {
  id: string;
  name: string;
  order: number;
}

export interface RecommendedBook {
  id: string;
  title: string;
  author: string;
  isbn: string;
  courseId: string;
  semesterId: string;
  description: string;
  purchaseLink?: string;
}

export interface DownloadProgress {
  loaded: number;
  total: number;
  progress: number;
}