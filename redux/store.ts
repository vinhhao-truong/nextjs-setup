import { configureStore } from "@reduxjs/toolkit";
import componentSlice from "./componentSlice";

const store = configureStore({
  reducer: {
    component: componentSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
