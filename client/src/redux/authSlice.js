import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../constant/urls.js";

const getUser = () => {
  let user = localStorage.getItem("userInfo");
  if (user) {
    return JSON.parse(user);
  } else {
    return null;
  }
};
const getTheme = () => {
  let theme = localStorage.getItem("theme");
  if (!theme) {
    return localStorage.setItem("theme", "light");
  } else {
    return theme;
  }
};

export const registerUserReq = createAsyncThunk(
  "auth/registerUser",
  async (userData, thunkAPI) => {
    console.log(userData);
    try {
      const registration = await axios.post(
        base_url + "/registerUser",
        userData,
      );
      return registration.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    error: null,
    success: null,
    userInfo: getUser(),
    theme: getTheme(),
  },
  reducers: {
    toggleTheme(state, action) {
      if (action.payload === "light") {
        state.theme = action.payload;
        localStorage.setItem("theme", state.theme);
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add(state.theme);
      } else {
        state.theme = action.payload;
        localStorage.setItem("theme", state.theme);
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add(state.theme);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserReq.pending, (state, action) => {
        state.isLoading = true;
        state.error = "";
        state.success = "";
      })
      .addCase(registerUserReq.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = action.payload;
      })
      .addCase(registerUserReq.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = null;
      });
  },
});
export default authSlice.reducer;
export const { toggleTheme } = authSlice.actions;
