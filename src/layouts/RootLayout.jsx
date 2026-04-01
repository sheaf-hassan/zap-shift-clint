import React from "react";
import { Outlet } from "react-router";
import Navbar from "../router/shared/Navbar/Navbar";
import Footer from "../router/shared/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
