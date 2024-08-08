import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import toast from "react-hot-toast";

axios.defaults.baseURL = 'https://connections-api.goit.global/'

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    // Використовуємо символ підкреслення як ім'я першого параметра,
    // тому що в цій операції він нам не потрібен
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/contacts");
        // При успішному запиті повертаємо проміс із даними
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
            const response = await axios.post("/contacts", newContacts);
            toast.success('Contact added successfully!');
            return response.data;
        } catch (error) {
            toast.error('Failed to add contact!');
            return thunkAPI.rejectWithValue(error.message);
        }
    }
  )

  export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            toast.error('Contact deleted!');
            return response.data;
        } catch (error) {
            toast.error('Failed to delete contact!');
            return thunkAPI.rejectWithValue(error.message);
        }
    }
  )