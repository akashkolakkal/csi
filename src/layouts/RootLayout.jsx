import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <section className="max-w-screen overflow-x-hidden bg-csi-primary-bg text-csi-primary-light grid place-items-center">
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
};

export default RootLayout;
