import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import {
  fetchReviews,
  addReview,
  deleteReview,
  updateReview,
  fetchOwnReviews,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  reviews: [],
  ownReviews: [],
  isLoading: false,
  error: null,
};
export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchReviews.pending, handlePending)
      .addCase(fetchReviews.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.reviews = payload;
      })
      .addCase(fetchReviews.rejected, handleRejected)

      .addCase(fetchOwnReviews.pending, handlePending)
      .addCase(fetchOwnReviews.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.ownReviews = payload;
      })
      .addCase(fetchOwnReviews.rejected, handleRejected)

      .addCase(addReview.pending, handlePending)
      .addCase(addReview.fulfilled, (state, { payload }) => {
        state.reviews = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addReview.rejected, handleRejected)

      .addCase(deleteReview.pending, handlePending)
      .addCase(deleteReview.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.reviews = state.reviews.filter(
          review => review.id !== payload.id
        );
      })
      .addCase(deleteReview.rejected, handleRejected)

      .addCase(updateReview.pending, handlePending)
      .addCase(updateReview.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.reviews = state.reviews
          .filter(review => review.id !== payload.id)
          .concat(payload);
      })
      .addCase(updateReview.rejected, handleRejected)

      .addCase(logOut.fulfilled, state => {
        state.reviews = [];
        state.ownReviews = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const reviewsReducer = reviewsSlice.reducer;



