import { CSSProperties } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <div style={rootStyle}>
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
}

const rootStyle: CSSProperties = {};
export default Layout;
