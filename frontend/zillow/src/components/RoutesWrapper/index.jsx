import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import HomePage from "../../pages/HomePage";
import SignIn from "../../pages/Auth/SignIn";
import Layout from "../Layout";

const RoutesWrapper = () => {
  return (
    // Use HashRouter instead of BrowserRouter if deploying to github pages.
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default RoutesWrapper;
