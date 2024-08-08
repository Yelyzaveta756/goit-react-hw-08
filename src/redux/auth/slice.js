import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "./operations";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
    .addCase(register.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.isLoggedIn = false;
    })
    .addCase(register.fulfilled, (state, action) => {
      console.log(action.payload)
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
      state.loading = false;
    })
    .addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isLoggedIn = false;
    })
    .addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.isLoggedIn = false;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
      state.loading = false;
    })
    .addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isLoggedIn = false;
    })
    .addCase(logout.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    })
    .addCase(logout.fulfilled, (state) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
      state.loading = false;
    })
    .addCase(logout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(refreshUser.pending, (state) => {
      state.loading = true;
      state.isLoggedIn = false;
      state.error = null;
      state.isRefreshing = true;
    })
    .addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = null;
      state.loading = false;
    })
    .addCase(refreshUser.rejected, (state, action) => {
      state.isRefreshing = false;
      state.isLoggedIn = false;
      state.error = action.payload;
      state.loading = false;
    });
  }

})

export const authReducer = authSlice.reducer

