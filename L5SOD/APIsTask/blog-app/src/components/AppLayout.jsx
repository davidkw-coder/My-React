import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
