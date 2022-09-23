import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import Login from "../../pages/Auth/Login";
import Dashboard from "../../pages/Dashboard";
import HomePage from "../../pages/HomePage";
import Layout from "../Layout";

const RoutesWrapper = () => {
  return (
    // Use HashRouter instead of BrowserRouter if deploying to github pages.
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default RoutesWrapper;
