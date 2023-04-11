import React, { PropsWithChildren } from "react";
import NavBar from "../Navbar/Navbar";
const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};
export default Layout;
