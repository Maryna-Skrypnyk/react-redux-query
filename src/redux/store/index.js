import { configureStore } from "@reduxjs/toolkit";
import catReducer from "../slices";

export default configureStore({
  reducer: { catReducer },
});
