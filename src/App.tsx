import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout";
import ProductPage from "./components/ProductPage";
import DetailPage from "./components/DetailPage";
import CheckoutPage from "./components/CheckoutPage";
import {  productData, ProductData } from "./ProductData";
import EmptyPage from "./components/EmptyPage";
import NotFound from "./components/NotFound";
import CartProvider from "./context/CartContextProvider";

interface Props {
  products: ProductData[];
}

function App(props: Props) {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProductPage products={productData} />} />
            <Route path="/textiles" element={<EmptyPage page="Textiles" />} />
            <Route path="/lighting" element={<EmptyPage page="Lighting" />} />
            <Route
              path="/decoration"
              element={<EmptyPage page="Decoration" />}
            />
            <Route
              path="/inspiration"
              element={<EmptyPage page="Inspiration" />}
            />
            <Route path="/detail/:id" element={<DetailPage products={productData}/>} />
            <Route path="/account" element="Account or admin page?" />
            <Route path="/checkoutpage" element={<CheckoutPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
