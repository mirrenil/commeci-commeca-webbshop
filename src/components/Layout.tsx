import { CSSProperties } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ProductCard from "./ProductCard";

function Layout() {
  return (
    <div style={rootStyle}>
      <Header />
      <Outlet />
      <ProductCard />
      <Footer />
    </div>
  );
}

const rootStyle: CSSProperties = {};
export default Layout;
