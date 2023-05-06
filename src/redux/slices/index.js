import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../api";

export const fetchCats = createAsyncThunk(
  "https://catfact.ninja/fact",
  async () => {
    const response = await fetchData("https://catfact.ninja/fact");
    if (response.status > 400) {
      console.log("ERROR");
    }
    return response.data.fact;
  }
);

const catSlice = createSlice({
  name: "catSlice",
  initialState: {
    value: 0,
    catsData: null,
    isLoading: false,
    error: "",
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCats.fulfilled, (state, action) => {
      state.catsData = action.payload;
    });
    builder.addCase(fetchCats.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCats.rejected, (state, action) => {
      state.error = "ERROR";
    });
  },
});

export const { increment } = catSlice.actions;

export default catSlice.reducer;
