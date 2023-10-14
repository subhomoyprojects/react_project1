import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper";

export const registerAuth = createAsyncThunk("/user/signup", async (formData) => {
  let res = await axiosInstance.post(`/user/signup`, formData);
  let resData = res?.data;
  return resData;
});

export const loginAuth = createAsyncThunk("/user/signin", async (formData) => {
  let res = await axiosInstance.post(`/user/signin`, formData);
  let resData = res?.data;
  return resData;
});

export const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerAuth.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(registerAuth.fulfilled, (state, { payload }) => {
        state.status = "idle";
      })
      .addCase(registerAuth.rejected, (state, action) => {
        state.status = "idle";
      })

      .addCase(loginAuth.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(loginAuth.fulfilled, (state, { payload }) => {
        state.status = "idle";
        localStorage.setItem("token", payload.token);
      })
      .addCase(loginAuth.rejected, (state, action) => {
        state.status = "idle";
      });
  },
});

export default AuthSlice.reducer;
