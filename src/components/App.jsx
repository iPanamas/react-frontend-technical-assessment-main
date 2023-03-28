import { Route, Routes } from "react-router-dom";

import { ROUTES } from "../utils/routes";

import Navbar from "./Navbar/Navbar";
import Home from "../pages/HomePage/HomePage";
import ContactPage from "../pages/ContactPage/ContactPage";

import FooterOfApp from "./Footer/Footer";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        </Route>
      </Routes>
      <FooterOfApp />
    </>
  );
};
