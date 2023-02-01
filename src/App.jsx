import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Admin from "./pages/admin/Admin";
import AdminOrders from "./pages/admin/AdminOrders";
import Order from "./pages/admin/Order";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import MyAccount from "./pages/MyAccount";
import MyOrders from "./pages/MyOrders";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/admin/orders/:id" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/account/orders" element={<MyOrders />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
