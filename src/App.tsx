import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./components/AdminPage";
import CheckoutPage from "./components/CheckoutPage";
import DetailPage from "./components/DetailPage";
import EmptyPage from "./components/shared/EmptyPage";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import ProductPage from "./components/ProductPage";
import ProductProvider from "./context/AdminPageContext";
import CartProvider from "./context/CartContextProvider";
import { productData } from "./ProductData";
import OrderConfirmation from "./components/OrderConfirmation";
import OrderProvider from "./context/OrderContextProvider";

function App() {

  return (
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <OrderProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<ProductPage />} />
                <Route
                  path="/textiles"
                  element={<EmptyPage page="Textiles" />}
                />
                <Route
                  path="/lighting"
                  element={<EmptyPage page="Lighting" />}
                />
                <Route
                  path="/decoration"
                  element={<EmptyPage page="Decoration" />}
                />
                <Route
                  path="/inspiration"
                  element={<EmptyPage page="Inspiration" />}
                />
                <Route path="/detail/:id" element={<DetailPage />} />
                <Route path="/confirmation" element={<OrderConfirmation />} />
                {/* above line for confirmation to be deleted when confirmation is linked to checkout */}

                <Route
                  path="/admin"
                  element={<AdminPage products={productData} />}
                />
                <Route path="/checkoutpage" element={<CheckoutPage />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </OrderProvider>
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
