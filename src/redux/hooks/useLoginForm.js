"use client";

import { useReducer, useCallback } from 'react';
import { useUser } from './useUser';

const initialState = {
  inputName: '',
  error: '',
};

const actionTypes = {
  SET_NAME: 'SET_NAME',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  RESET: 'RESET',
};

const loginFormReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_NAME:
      return {
        ...state,
        inputName: action.payload,
        error: '',
      };
    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.CLEAR_ERROR:
      return {
        ...state,
        error: '',
      };
    case actionTypes.RESET:
      return initialState;
    default:
      return state;
  }
};

export const useLoginForm = () => {
  const [state, dispatch] = useReducer(loginFormReducer, initialState);
  const { login } = useUser();

  const handleInputChange = useCallback((e) => {
    dispatch({ type: actionTypes.SET_NAME, payload: e.target.value });
  }, []);

  const handleLogin = useCallback(() => {
    if (state.inputName.trim()) {
      const success = login(state.inputName);
      if (!success) {
        dispatch({ type: actionTypes.SET_ERROR, payload: 'Пользователь не найден' });
      }
    } else {
      dispatch({ type: actionTypes.SET_ERROR, payload: 'Введите имя' });
    }
  }, [state.inputName, login]);

  return {
    inputName: state.inputName,
    error: state.error,
    handleInputChange,
    handleLogin,
  };
};
