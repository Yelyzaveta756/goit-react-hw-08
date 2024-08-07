import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

axios.defaults.baseURL = 'https://connections-api.goit.global/'

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    // Використовуємо символ підкреслення як ім'я першого параметра,
    // тому що в цій операції він нам не потрібен
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("contacts");
        // При успішному запиті повертаємо проміс із даними
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        return response.data;
      } catch (error) {
        // При помилці запиту повертаємо проміс
        // який буде відхилений з текстом помилки
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContacts, thunkAPI) => {
        try {
            const response = await axios.post("contacts", newContacts);
            axios.defaults.headers.common.Authorization = `Bearer ${token}`
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
  )

  export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`contacts/${id}`);
            axios.defaults.headers.common.Authorization = '';
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
  )