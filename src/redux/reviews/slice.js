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
      
      // fetch all reviews
      .addCase(fetchReviews.pending, handlePending)
      .addCase(fetchReviews.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.reviews = payload;
      })
      .addCase(fetchReviews.rejected, handleRejected)

      // fetch own reviews
      .addCase(fetchOwnReviews.pending, handlePending)
      .addCase(fetchOwnReviews.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.ownReviews = payload;
      })
      .addCase(fetchOwnReviews.rejected, handleRejected)

      // add reviews
      .addCase(addReview.pending, handlePending)
      .addCase(addReview.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;

        // добавляем в массив
        state.reviews.push(payload);
      })
      .addCase(addReview.rejected, handleRejected)

      // delete reviews (save id)
      .addCase(deleteReview.pending, handlePending)
      .addCase(deleteReview.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;

        const deletedId = payload?.id || payload?._id;

        state.reviews = state.reviews.filter(
          review => review.id !== deletedId && review._id !== deletedId
        );
      })
      .addCase(deleteReview.rejected, handleRejected)

      // update reviews (save id)
      .addCase(updateReview.pending, handlePending)
      .addCase(updateReview.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;

        const updatedId = payload?.id || payload?._id;

        state.reviews = state.reviews
          .filter(review => review.id !== updatedId && review._id !== updatedId)
          .concat(payload);
      })
      .addCase(updateReview.rejected, handleRejected)

      // logout
      .addCase(logOut.fulfilled, state => {
        state.reviews = [];
        state.ownReviews = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const reviewsReducer = reviewsSlice.reducer;



