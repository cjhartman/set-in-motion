import { configureStore } from "@reduxjs/toolkit";
import sideDrawerReducer from "./reducers/sideDrawerReducer";
import { SideDrawerState } from "./types/sideDrawer";
import { FormType } from "./types/formType";

const initialStore: SideDrawerState = {
  formType: FormType.None,
  isOpen: false,
  task: null,
  list: null,
};

const store = configureStore({
  reducer: sideDrawerReducer,
  ...initialStore,
});

export default store;
