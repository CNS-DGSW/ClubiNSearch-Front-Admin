import React, { ReactNode } from "react";
import Header from "../common/Header/Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
