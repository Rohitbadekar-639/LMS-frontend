import React from 'react';
import styles from '../styles/CourseDetails.module.css';

const CourseDetails = ({ course }) => {
  return (
    <div className={styles.courseDetails}>
      <h2>{course.name} Details</h2>
      <div className={styles.details}>
        <p>Description: {course.description}</p>
        <ul>
          {course.materials &&
            course.materials.map((material) => (
              <li key={material.id}>{material.name}</li>
            ))}
        </ul>
        <h3>Assignments</h3>
        <ul>
          {course.assignments &&
            course.assignments.map((assignment) => (
              <li key={assignment.id}>{assignment.title}</li>
            ))}
        </ul>
        <h3>Instructor Bio</h3>
        <p>{course.instructorBio}</p>
      </div>
    </div>
  );
};

export default CourseDetails;
