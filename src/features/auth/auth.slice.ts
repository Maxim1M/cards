import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ArgLoginType, ArgRegisterType, authApi, ProfileType } from "features/auth/auth.api";
import { createAppAsyncThunk } from "common/utils/createAppAsyncThunk";

// thunk

const register = createAppAsyncThunk<void, ArgRegisterType>("auth/register", async (arg) => {
  await authApi.register(arg);
});

const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>("auth/login", async (arg) => {
  const res = await authApi.login(arg);
  return { profile: res.data };
});

//slice

const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as ProfileType | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.profile = action.payload.profile;
    });
  },
});

export const authReducers = slice.reducer;
export const authThunks = { register, login };
