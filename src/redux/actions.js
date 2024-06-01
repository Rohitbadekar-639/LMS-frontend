export const SEARCH_COURSES = 'SEARCH_COURSES';
export const SORT_COURSES = 'SORT_COURSES';

export const searchCourses = (searchTerm) => ({
  type: SEARCH_COURSES,
  payload: searchTerm,
});

export const sortCourses = (sortBy) => ({
  type: SORT_COURSES,
  payload: sortBy,
});
