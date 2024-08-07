import { createAsyncThunk } from "@reduxjs/toolkit";

export const registrationNewUser = createAsyncThunk(
    "auth/register",
    async (newContacts, thunkAPI) => {
        try {
            const response = await axios.post("user/signup", newContacts);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
  )