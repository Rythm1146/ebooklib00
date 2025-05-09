import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { useLibraryContext } from '../context/LibraryContext';
import { Course, Semester } from '../types/library';

const FilterBar: React.FC = () => {
  const { courses, semesters, selectedCourse, selectedSemester, setSelectedCourse, setSelectedSemester } = useLibraryContext();
  const [filterOpen, setFilterOpen] = useState(false);

  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const courseId = e.target.value;
    setSelectedCourse(courseId === '' ? null : courseId);
  };

  const handleSemesterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const semesterId = e.target.value;
    setSelectedSemester(semesterId === '' ? null : semesterId);
  };

  const clearFilters = () => {
    setSelectedCourse(null);
    setSelectedSemester(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 transition-all duration-300 ease-in-out">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-blue-900">Filters</h2>
        <button 
          onClick={() => setFilterOpen(!filterOpen)}
          className="md:hidden flex items-center text-blue-700 hover:text-blue-900 transition-colors"
        >
          {filterOpen ? <X size={20} /> : <Filter size={20} />}
          <span className="ml-1">{filterOpen ? 'Close' : 'Filters'}</span>
        </button>
      </div>
      
      <div className={`grid gap-4 ${filterOpen ? 'grid-cols-1' : 'hidden md:grid md:grid-cols-2 lg:grid-cols-4'}`}>
        <div>
          <label htmlFor="course" className="block mb-2 text-sm font-medium text-gray-700">
            Course
          </label>
          <select
            id="course"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={selectedCourse || ''}
            onChange={handleCourseChange}
          >
            <option value="">All Courses</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.name}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="semester" className="block mb-2 text-sm font-medium text-gray-700">
            Semester
          </label>
          <select
            id="semester"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={selectedSemester || ''}
            onChange={handleSemesterChange}
          >
            <option value="">All Semesters</option>
            {semesters.map((semester) => (
              <option key={semester.id} value={semester.id}>
                {semester.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="lg:col-span-2 flex items-end">
          <button
            onClick={clearFilters}
            className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
          >
            <X size={16} className="mr-1" />
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;