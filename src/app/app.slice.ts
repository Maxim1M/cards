import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = typeof appInitialState;

const appInitialState = {
  error: null as string | null,
  isLoading: true,
  isAppInitialized: false,
};

const slice = createSlice({
  name: "app",
  initialState: appInitialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading;
      return { ...state, isLoading: action.payload.isLoading };
    },
  },
});

export const appReducer = slice.reducer;
export const appActions = slice.actions;
