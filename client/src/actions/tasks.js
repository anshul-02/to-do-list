import { FETCH_ALL, CREATE, UPDATE, DELETE, DONE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getTasks = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchTasks(id);
  
    dispatch({ type: FETCH_ALL, payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const createTask = (task) => async (dispatch) => {
  try {
    const { data } = await api.createTask(task);
    
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = (id, task) => async (dispatch) => {
  try {
    const { data } = await api.updateTask(id, task);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const taskDone = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('profile'));

  try {
    const { data } = await api.taskDone(id, user?.token);

    dispatch({ type: DONE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    await api.deleteTask(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
