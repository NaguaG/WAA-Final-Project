import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import Layout from "../Layout";

const RoutesWrapper = () => {
  return (
    // Use HashRouter instead of BrowserRouter if deploying to github pages.
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default RoutesWrapper;
