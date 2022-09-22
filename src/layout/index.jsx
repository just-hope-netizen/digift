import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.layout__children}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
