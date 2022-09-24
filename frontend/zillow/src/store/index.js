import { configureStore } from "@reduxjs/toolkit";
import GlobalSlice from "./slices/sidebar/sidebarSlice";

export default configureStore({
  reducer: {
    globalReducer : GlobalSlice.reducer
  },
});
