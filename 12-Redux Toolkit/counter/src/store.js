import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./features/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: countReducer,
  },
});

export default store;