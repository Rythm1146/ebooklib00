import { Book } from '../types/library';

// Simulated download progress
const simulateProgress = (
  onProgress: (progress: number) => void,
  duration = 3000
): Promise<void> => {
  return new Promise((resolve) => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(Math.round((elapsed / duration) * 100), 100);
      
      onProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        resolve();
      }
    }, 100);
  });
};

// Download a single material
export const downloadMaterial = async (book: Book): Promise<void> => {
  try {
    console.log(`Downloading material: ${book.title}`);
    
    // In a real application, this would initiate a download from Google Drive
    // For now, we're simulating the download process
    window.open(book.downloadUrl, '_blank');
    
    // Return a resolved promise
    return Promise.resolve();
  } catch (error) {
    console.error('Error downloading material:', error);
    throw error;
  }
};

// Download all materials as ZIP
export const downloadAllMaterials = async (
  books: Book[],
  courseId: string | null,
  semesterId: string | null,
  onProgress?: (progress: number) => void
): Promise<void> => {
  try {
    console.log(`Downloading all materials for course: ${courseId}, semester: ${semesterId}`);
    console.log(`Total files to download: ${books.length}`);
    
    // In a real application, this would:
    // 1. Call a backend service to fetch files from Google Drive
    // 2. Create a ZIP archive on the server
    // 3. Return a download link to the client
    
    // For now, we're simulating the download process
    await simulateProgress(
      (progress) => {
        if (onProgress) onProgress(progress);
        console.log(`Download progress: ${progress}%`);
      },
      3000
    );
    
    // In a real implementation, this would trigger the download of the ZIP file
    alert('All materials downloaded successfully!');
    
    return Promise.resolve();
  } catch (error) {
    console.error('Error downloading all materials:', error);
    throw error;
  }
};