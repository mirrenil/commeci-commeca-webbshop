import { CSSProperties } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <div style={rootStyle}>
      <Header />
      {/* <Outlet /> */}
      <Footer />
    </div>
  );
}

const rootStyle: CSSProperties = {};
export default Layout;
