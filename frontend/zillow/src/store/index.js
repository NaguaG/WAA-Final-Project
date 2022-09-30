import { configureStore } from "@reduxjs/toolkit";
import GlobalSlice from "./slices/sidebar/sidebarSlice";
import userReducer from "./slices/user/userSlice";
import usersReducer from "./slices/users/usersSlice";

export default configureStore({
  reducer: {
    globalReducer: GlobalSlice.reducer,
    user: userReducer,
    users: usersReducer
  },
});
