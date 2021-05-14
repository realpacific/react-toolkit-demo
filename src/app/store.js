import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import randomReducer from '../features/randomnumber/randomSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    random: randomReducer
  },
});
