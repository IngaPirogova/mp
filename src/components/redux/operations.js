import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.baseURL = '';


export const fetchReviews = createAsyncThunk(
    'reviews/fetchAll',
    async (_, thunkAPI) => {
      try {
        const { data } = await axios.get('reviews');
        return data.data.reviews;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
  export const fetchUserReviews = createAsyncThunk(
    'reviews/fetchOwn',
    async (_, thunkAPI) => {
      try {
        const { data } = await axios.get('reviews/user');
        return data.data.reviews;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  export const addReview = createAsyncThunk(
    'reviews/addReview',
    async (review, thunkAPI) => {
      try {
        const { data } = await axios.post('/reviews', review);
        return data.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
  export const deleteReview = createAsyncThunk(
    'reviews/deleteReview',
    async (reviewId, thunkAPI) => {
      try {
        const { data } = await axios.delete(`/reviews/user/${reviewId}`);
        return data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
  export const updateReview = createAsyncThunk(
    'reviews/updateReview',
    async ({ id, review }, thunkAPI) => {
      try {
        const { data } = await axios.patch(`/reviews/own/${id}`, review);
        return data.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );