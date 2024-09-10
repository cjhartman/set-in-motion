import { createSlice } from "@reduxjs/toolkit";
import { FormType } from "../types/formType";

const sideDrawerSlice = createSlice({
  name: "sideDrawer",
  initialState: {
    isOpen: false,
    formType: FormType.None,
    task: null,
    list: null,
  },
  reducers: {
    toggleDrawer: (state, action) => {
      state.isOpen = action.payload;
    },
    setFormType: (state, action) => {
      state.formType = action.payload;
    },
    setTaskValue: (state, action) => {
      state.task = action.payload;
    },
    setListValue: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { toggleDrawer, setFormType, setTaskValue, setListValue } =
  sideDrawerSlice.actions;

export default sideDrawerSlice.reducer;
