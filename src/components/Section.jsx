import React, { Component } from "react";
import {Route, Routes } from "react-router-dom";
import Details from "./section/Details";
import Cart from "./section/Cart";
import Payment from "./section/Payment";
import Products from "./section/Products";
function Section() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
  );
}

export default Section;
