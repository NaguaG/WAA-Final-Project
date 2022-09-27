import { configureStore } from "@reduxjs/toolkit";
import favSlice from "./slices/fav/favSlice";
import GlobalSlice from "./slices/sidebar/sidebarSlice";
import userReducer from "./slices/user/userSlice";
import propertyReducer from "./slices/property/propertySlice";
import usersReducer from "./slices/users/usersSlice";
import propertyReducer from "./slices/properties/propertySlice";

export default configureStore({
  reducer: {
    globalReducer: GlobalSlice.reducer,
    user: userReducer,
    favLists: favSlice.reducer,
    properties: propertyReducer,
    properties:propertyReducer
    users: usersReducer
  },
});
