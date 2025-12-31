import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quoteApiClient } from "../../services/apiClient";

export const fetchQuote = createAsyncThunk(
    'quote/fetchQuote',
    async () => {
        const response = await quoteApiClient.get('/');
        return response.data;
    }
);

export const quoteSlice = createSlice({
    name: "quote",
    initialState: {
        text: "",
        author: "",
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuote.fulfilled, (state, action) => {
                state.text = action.payload.quote;
                state.author = action.payload.author;
            });
    },
});


export default quoteSlice.reducer;