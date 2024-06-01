import React, { useState } from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Calendar from './components/Calendar';
import Progress from './components/Progress';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import styles from './App.css';

const courses = [
  { id: 1, name: 'Common English', teacher: 'John Doe', progress: 75 },
  { id: 2, name: 'Speaking Club', teacher: 'Jane Smith', progress: 50 },
  { id: 3, name: 'Business English', teacher: 'Michael Lee', progress: 20 },
  { id: 4, name: 'Spanish Grammar', teacher: 'Amanda Wood', progress: 72 },
];

const App = () => {
  const [selectedCourse, setSelectedCourse] = React.useState(null);
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCourseClick = (courseId) => {
    const selected = courses.find((course) => course.id === courseId);
    setSelectedCourse(selected);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value); // Update search term state here
    const filtered = courses.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
  };
  
  return (
    <div className={styles.app}>
      <Header userName="John Mason" onSearch={handleSearch} />
      <main className={styles.main}>
        <div className="content-wrapper">
          <Welcome name="John" />
          <Calendar />
        </div>
        <Progress progress={84} />
        <CourseList
          courses={filteredCourses}
          onCourseClick={handleCourseClick}
          searchTerm={searchTerm}
        />
        {selectedCourse && <CourseDetails course={selectedCourse} />}
      </main>
    </div>
  );
};

export default App;
