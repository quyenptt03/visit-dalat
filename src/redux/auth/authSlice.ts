import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../api";

export const register = createAsyncThunk(
  "user/register",
  async (payload: object) => {
    const response = await userApi.register(payload);

    //save user data to local storage
    localStorage.setItem("user", JSON.stringify(response.data.user));

    return response.data.user;
  }
);

export const login = createAsyncThunk("user/login", async (payload: object) => {
  const response = await userApi.login(payload);

  localStorage.setItem("user", JSON.stringify(response.data.user));

  return response.data.user;
});

export const logout = createAsyncThunk("user/logout", async () => {
  await userApi.logout();
  localStorage.removeItem("user");
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    current: JSON.parse(localStorage.getItem("user") || "{}"),
    settings: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.current = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.current = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.current = {};
      });
  },
});
const { reducer } = authSlice;
export default reducer;
