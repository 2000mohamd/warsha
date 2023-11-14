import React from "react";
import Header from "./header";
import Footer from "./footer";
import { ParallaxProvider } from "react-scroll-parallax";
import FloatingWhatsApp from "react-floating-whatsapp";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ParallaxProvider>
        <main>{children}</main>
      </ParallaxProvider>
      {/* <FloatingWhatsApp
        styles={{ zIndex: "100" }}
        phoneNumber="123456789"
        accountName="awran5"
        allowClickAway
        darkMode
      /> */}
      <Footer />
      {/* <UpCircleOutlined className="scroll-arrow" /> */}
    </>
  );
};

export default Layout;
