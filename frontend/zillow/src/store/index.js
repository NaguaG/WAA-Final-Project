import { configureStore } from "@reduxjs/toolkit";
import favSlice from "./slices/fav/favSlice";
import GlobalSlice from "./slices/sidebar/sidebarSlice";
import userReducer from "./slices/user/userSlice";
import usersReducer from "./slices/users/usersSlice";

export default configureStore({
  reducer: {
    globalReducer: GlobalSlice.reducer,
    user: userReducer,
    favLists: favSlice.reducer,
  },
});
