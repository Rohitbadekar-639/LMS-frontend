import { combineReducers } from 'redux';
import SEARCH_COURSES from './actions'
import SORT_COURSES from './actions'

const initialState = {
  courses: [ 
    { id: 1, title: 'Course 1', description: 'Course Description 1' },
    { id: 2, title: 'Course 2', description: 'Course Description 2' },
    { id: 3, title: 'Advanced JavaScript', description: 'Advanced JavaScript Course' },
  ],
  searchTerm: '',
  sortBy: 'none',
};

const coursesReducer = (state = initialState.courses, action) => {
  switch (action.type) {
    case SEARCH_COURSES:
      return state.filter((course) => course.title.toLowerCase().includes(action.payload.toLowerCase()));
    case SORT_COURSES:
      const sortedCourses = [...state];
      if (action.payload === 'title') {
        sortedCourses.sort((a, b) => (a.title > b.title ? 1 : -1));
      } else if (action.payload === 'id') {
        sortedCourses.sort((a, b) => (a.id > b.id ? 1 : -1));
      }
      return sortedCourses;
    default:
      return state;
  }
};

const searchTermReducer = (state = initialState.searchTerm, action) => {
  switch (action.type) {
    case SEARCH_COURSES:
      return action.payload;
    default:
      return state;
  }
};

const sortByReducer = (state = initialState.sortBy, action) => {
  switch (action.type) {
    case SORT_COURSES:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  courses: coursesReducer,
  searchTerm: searchTermReducer,
  sortBy: sortByReducer,
});

export default rootReducer;
