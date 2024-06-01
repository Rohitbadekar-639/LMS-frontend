import React from 'react';
import styles from '../styles/CourseList.module.css';

const Course = ({ course }) => {
  return (
    <li className={styles.course}>
      <h3>{course.name}</h3>
      <p>Teacher: {course.teacher}</p>
      <p>Progress: {course.progress}%</p>
    </li>
  );
};

const CourseList = ({ courses }) => {
  return (
    <ul className={styles.courseList}>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </ul>
  );
};

export default CourseList;
