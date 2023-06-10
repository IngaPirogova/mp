import { configureStore } from '@reduxjs/toolkit';
import { reviewsReducer } from './src/redux/reviews/slice';

export const store = configureStore({
  
  
reducer: {
    reviews: reviewsReducer  
  },  
});

