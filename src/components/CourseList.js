import React from 'react';
import styles from '../styles/CourseList.module.css';

const Course = ({ course, searchTerm }) => {
  const courseName = course.name.toLowerCase();
  const searchText = searchTerm.toLowerCase();
  const matchIndex = courseName.indexOf(searchText);

  return (
    <li className={styles.course}>
      <h3>
        {matchIndex !== -1 ? ( // Highlight matching text if found
          <>
            {courseName.slice(0, matchIndex)}
            <span className={styles.highlight}>
              {courseName.slice(matchIndex, matchIndex + searchText.length)}
            </span>
            {courseName.slice(matchIndex + searchText.length)}
          </>
        ) : (
          course.name
        )}
      </h3>
      <p>Teacher: {course.teacher}</p>
      <p>Progress: {course.progress}%</p>
    </li>
  );
};

const CourseList = ({ courses, onCourseClick, searchTerm }) => {
  return (
    <ul className={styles.courseList}>
      {courses.length > 0 ? (
        courses.map((course) => (
          <Course key={course.id} course={course} searchTerm={searchTerm} />
        ))
      ) : (
        <p className={styles.noResults}>No courses found matching "{searchTerm}"</p>
      )}
    </ul>
  );
};

export default CourseList;
