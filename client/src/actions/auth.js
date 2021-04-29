import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';
// import { Alert } from 'react';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    if( !data.success ) {
      alert('Email or password is incorrect');
      router.push('/auth');
    }
    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    console.log(formData);
    if( formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      router.push('/auth');
    } else {
      const { data } = await api.signUp(formData);
      if( !data.success ) {
        alert('Email already in use');
        router.push('/auth');
      }
      dispatch({ type: AUTH, data });

      
    }
    router.push('/');
  } catch (error) {
    console.log(error);
  }
};
