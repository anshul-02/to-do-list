import { FETCH_ALL, CREATE, UPDATE, DELETE, DONE } from '../constants/actionTypes';

export default (tasks = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case DONE:
      return tasks.map((task) => (task.id === action.payload.id ? action.payload : task));
    case CREATE:
      return [...tasks,action.payload.data];
    case UPDATE:
      console.log( action.payload.task);
      return tasks.map((task) => (task.id === action.payload.task.id ? action.payload.task : task));
    case DELETE:
      return tasks.filter((task) => (task.id !== action.payload));
    default:
      return [];
  }
};

