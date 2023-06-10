export const selectReviews = (state) => state.reviews.reviews;
export const selectUserReviews = (state) => state.reviews.ownReviews;
export const selectIsLoading = (state) => state.reviews.isLoading;
export const selectError = (state) => state.reviews.error;