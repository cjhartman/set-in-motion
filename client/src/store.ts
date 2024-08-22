import { configureStore } from "@reduxjs/toolkit";
import sideDrawerReducer from "./reducers/sideDrawerReducer";

const store = configureStore({
  reducer: sideDrawerReducer,
});

export default store;
