import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000/api/users' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchTasks = (id) => API.get(`/tasks/${id}`);
export const createTask = (newTask) => API.post('/tasks', newTask);
export const taskDone = (id) => API.patch(`/tasks/${id}/taskdone`);
export const updateTask = (id, updatedTask) => API.patch(`/tasks/${id}`, updatedTask);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);

export const signIn = (formData) => API.post('/login', formData);
export const signUp = (formData) => API.post('/signup', formData);
