import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBlogs = createAsyncThunk(
  "blog/allBlogs",
  async (arg, thunkAPI) => {
    try {
      const blogs = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      );
      return blogs.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    isLoading: false,
    error: null,
    blogs: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isLoading = true;
        state.blogs = [];
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      });
  },
});

export default blogSlice.reducer;
