import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ErrorBoundary from "./shared/ErrorBoundary";

function Layout() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <ErrorBoundary onGoBack={() => navigate("/")}>
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default Layout;
