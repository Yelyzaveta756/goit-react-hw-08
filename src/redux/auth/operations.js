import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.goit.global/'

const setAuthHeader = (token) => {
axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };

export const register = createAsyncThunk(
    "auth/register",
    async (newContacts, thunkAPI) => {
        try {
            const response = await axios.post("users/signup", newContacts);
            setAuthHeader(response.data.token)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
  )

  export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });



  export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
  
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
      
      try {
        setAuthHeader(persistedToken);
        const res = await axios.get('/users/me');
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
