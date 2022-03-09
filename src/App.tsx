import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout";
import ProductPage from "./components/ProductPage";
import DetailPage from "./components/DetailPage";
import CheckoutPage from "./components/CheckoutPage";
import { ProductData } from "./ProductData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductPage products={ProductData} />} />
          <Route path="/detailpage" element={<DetailPage />} />
          <Route path="/checkoutpage" element={<CheckoutPage />} />
          <Route path="*" /*element={<NotFound />}*/ />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
