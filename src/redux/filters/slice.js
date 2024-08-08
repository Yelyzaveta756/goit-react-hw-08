import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        name: "",
        number: ""
    },
    reducers: {
        changeNameFilter(state, action) {
            state.name = action.payload
        },
        changePhoneFilter(state, action) {
            state.number = action.payload;
        },
    }
})

export const {changeNameFilter, changePhoneFilter} = filtersSlice.actions
export const filtersReducer = filtersSlice.reducer
