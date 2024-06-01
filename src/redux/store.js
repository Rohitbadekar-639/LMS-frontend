import { createStore } from 'redux';

const initialState = {
  courses: [
    { id: 1, title: 'Introduction to React', enrolled: true },
    { id: 2, title: 'JavaScript Fundamentals', enrolled: false },
    { id: 3, title: 'Data Structures and Algorithms', enrolled: true },
  ],
  searchText: '',
  sortBy: 'title', // Default sorting option
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_TEXT':
      return { ...state, searchText: action.payload };
    case 'SORT_COURSES':
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
