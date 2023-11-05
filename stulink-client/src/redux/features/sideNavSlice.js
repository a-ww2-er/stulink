
import { createSlice } from "@reduxjs/toolkit";

export const sideNavSlice = createSlice({
  name: "sideNav",
  initialState: {
    values: {
      open: false,
    },
  },
  reducers: {
    toggleSideBar: (state) => {
      state.values.open = !state.values.open;
      //    console.log(state)
      //        return{...state};
    },
    //        closeSidebar:(state)=>{},
    //        openSidebar:(state,action)=>{console.log("OPEN");return {...state}}
  },
});
export const {toggleSideBar} = sideNavSlice.actions
export default sideNavSlice.reducer