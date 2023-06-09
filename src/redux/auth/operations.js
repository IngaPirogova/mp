import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      // clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });


  export const fetchUserById = createAsyncThunk(
    'users/fetchUserById',
    async (id, thunkAPI) => {
      try {
        const { data } = await axios.get(`/users/${id}`);
        return data.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );