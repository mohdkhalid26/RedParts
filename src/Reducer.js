import {createReducer } from '@reduxjs/toolkit';

const initialState = { 
    first: 1,
    second: 2,
};

export const reducerFirst = createReducer(initialState, (builder) => {
    builder.addCase('firstVal', (state, action) => {
      state.first = action.payload;
    });
  });
  
  export const reducerSecond = createReducer(initialState, (builder) => {
    builder.addCase('secondVal', (state, action) => {
      state.second = action.payload;
    });
  });