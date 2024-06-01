import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Calendar from './components/Calendar';
import Progress from './components/Progress';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import styles from './App.css';

// Sample course data (replace with your data fetching logic)
const courses = [
  { id: 1, name: 'Web Development Fundamentals', teacher: 'John Doe', progress: 75 },
  { id: 2, name: 'Data Science Essentials', teacher: 'Jane Smith', progress: 50 },
  { id: 3, name: 'UX Design for Beginners', teacher: 'Michael Lee', progress: 20 },
];

const App = () => {
  const [selectedCourse, setSelectedCourse] = React.useState(null);

  const handleCourseClick = (courseId) => {
    const selected = courses.find((course) => course.id === courseId);
    setSelectedCourse(selected);
  };

  return (
    <div className={styles.app}>
      <Header userName="John Mason" />
      <main className={styles.main}>
        <div className="content-wrapper">
          <Welcome name="John" /> 
          <Calendar />
        </div>
        <Progress progress={84} />
        <CourseList courses={courses} onCourseClick={handleCourseClick} />
        {selectedCourse && <CourseDetails course={selectedCourse} />}
      </main>
    </div>
  );
};

export default App;
