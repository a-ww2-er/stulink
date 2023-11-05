import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 accountDetails:{}
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    userAccountDetails: (state, action) => {
      state. accountDetails = action.payload. accountDetails;
      // state.user = action.payload.user;
    },
  },
});

export const { userAccountDetails } =
  profileSlice.actions;

  export default profileSlice.reducer