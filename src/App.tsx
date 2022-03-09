import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout";
import ProductPage from "./components/ProductPage";
import DetailPage from "./components/DetailPage";
import CheckoutPage from "./components/CheckoutPage";
import { ProductData } from "./ProductData";
import EmptyPage from "./components/EmptyPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductPage products={ProductData} />} />
          <Route path="/textiles" element={<EmptyPage page="Textiles" />} />
          <Route path="/lighting" element={<EmptyPage page="Lighting" />} />
          <Route path="/decoration" element={<EmptyPage page="Decoration" />} />
          <Route
            path="/inspiration"
            element={<EmptyPage page="Inspiration" />}
          />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/account" element="Account or admin page?" />
          <Route path="/checkoutpage" element={<CheckoutPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
