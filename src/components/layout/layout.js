import React, { PropsWithChildren } from "react";
import NavBar from "../Navbar/Navbar";
import Drawer from "../drawer/Drawer";
const Layout = ({ children }) => {
  return (
    <>
      <Drawer></Drawer>
      {children}
    </>
  );
};
export default Layout;
