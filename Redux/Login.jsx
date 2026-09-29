import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "UserSlice",

  initialState: {
    UserName: "",
    UserID: "",
    AccessToken:"",
  },

  reducers: {
    UserID: (state, action) => {
      state.UserID = action.payload;
    },
    UserName: (state, action) => {
      state.UserName = action.payload;
    },
    Token: (state, action) => {
      state.AccessToken = action.payload;
    }
  ,
  },
});

export const { UserID ,UserName,Token} = UserSlice.actions;

export default UserSlice.reducer;