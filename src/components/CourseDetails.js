import React from 'react';
import styles from '../styles/CourseDetails.module.css';

const CourseDetails = ({ course, onCourseClick }) => {
  const handleClick = () => {
    onCourseClick(course); 
  };

  return (
    <li className={styles.course} onClick={handleClick}> 
      <h3>{course.name}</h3>
      <p>Teacher: {course.teacher}</p>
      <p>Progress: {course.progress}%</p>
    </li>
  );
};

export default CourseDetails;
