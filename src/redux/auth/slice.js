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
    })
    .addCase(register.fulfilled, (state, action) => {
      // state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
      state.loading = false;
    })
    .addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(login.pending, (state) => {
      state.loading = true;
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
    })
    .addCase(logout.fulfilled, (state) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
      state.loading = false;
    })
    .addCase(refreshUser.pending, (state) => {
      state.isRefreshing = true;
      state.loading = true;
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
      state.error = action.payload;
      state.loading = false;
    });
  }

})

export const authReducer = authSlice.reducer

