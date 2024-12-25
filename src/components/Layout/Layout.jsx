import React from "react";

//Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
}
