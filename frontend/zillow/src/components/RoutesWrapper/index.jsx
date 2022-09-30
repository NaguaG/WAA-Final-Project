import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import HomePage from "../../pages/HomePage";
import SignIn from "../../pages/Auth/SignIn";
import FavList from "../../pages/Fav/";
import Layout from "../Layout";
import CustomDrawer from "../Drawer/CustomDrawer";
import { Drawer } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toogleSideBar } from "../../store/slices/sidebar/sidebarSlice";
import Properties from "../../pages/Properties";
import Users from "../../pages/Users";
import Applications from "../../pages/Applications";
import CreateProperty from "../../pages/Properties/CreateProperty";
import CreateFav from "../../pages/Fav/CreateFav";
import SignUp from "../../pages/Auth/Signup";
import Logout from "../../pages/Logout";
import CreateUser from "../../pages/Users/CreateUser";
import ViewUser from "../../pages/Users/ViewUser";
import ResetUserPassword from "../../pages/Users/ResetUserPassword";
import PropertyDetails from "../../pages/PropertyDetails";

const anchor = "left";

const RoutesWrapper = () => {
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.globalReducer.sideBarVisible);

  const toggleDrawer = () => {
    // setState(!state);
    dispatch(toogleSideBar());
  };
  return (
    // Use HashRouter instead of BrowserRouter if deploying to github pages.
    <BrowserRouter>
      <Layout>
        <Drawer anchor={anchor} open={visible} onClose={toggleDrawer}>
          {<CustomDrawer />}
        </Drawer>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>

          <Route path="/dashboard/fav" element={<FavList />}></Route>
          <Route path="/dashboard/fav/create" element={<CreateFav />}></Route>

          <Route path="/dashboard/properties" element={<Properties />}></Route>
          <Route
            path="/dashboard/properties/create"
            element={<CreateProperty />}></Route>
          <Route
            path="/dashboard/properties/:id/edit"
            element={<Properties />}></Route>

          <Route path="/dashboard/users" element={<Users />}></Route>
          <Route
            path="/dashboard/users/:id/view"
            element={<ViewUser />}></Route>
          <Route
            path="/dashboard/users/:id/edit"
            element={<CreateUser />}></Route>
          <Route
            path="/dashboard/users/:id/passwordReset"
            element={<ResetUserPassword />}></Route>
          <Route
            path="/dashboard/applications"
            element={<Applications />}></Route>

          <Route
            path="/property-details/:id"
            element={<PropertyDetails />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default RoutesWrapper;
