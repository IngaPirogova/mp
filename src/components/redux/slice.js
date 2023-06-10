import { createSlice } from '@reduxjs/toolkit';
import { fetchReviews, fetchUserReviews, addReview, deleteReview, updateReview } from './api';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  reviews: [],
  userReviews: [],
  isLoading: false,
  error: null,
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, handlePending)
      .addCase(fetchReviews.rejected, handleRejected)
      .addCase(fetchReviews.fulfilled, (state, { payload }) => {
        state.reviews = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchUserReviews.pending, handlePending)
      .addCase(fetchUserReviews.rejected, handleRejected)
      .addCase(fetchUserReviews.fulfilled, (state, { payload }) => {
        state.userReviews = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addReview.pending, handlePending)
      .addCase(addReview.rejected, handleRejected)
      .addCase(addReview.fulfilled, (state, { payload }) => {
        state.reviews.push(payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteReview.pending, handlePending)
      .addCase(deleteReview.rejected, handleRejected)
      .addCase(deleteReview.fulfilled, (state, { payload }) => {
        state.reviews = state.reviews.filter((review) => review.id !== payload.id);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateReview.pending, handlePending)
      .addCase(updateReview.rejected, handleRejected)
      .addCase(updateReview.fulfilled, (state, { payload }) => {
        const index = state.reviews.findIndex((review) => review.id === payload.id);
        if (index !== -1) {
          state.reviews[index] = payload;
        }
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const reviewsReducer = reviewsSlice.reducer;