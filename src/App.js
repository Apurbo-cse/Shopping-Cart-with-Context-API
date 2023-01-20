import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { productApi } from "./components/api/productApi";
import Navbar from "./components/layouts/include/Navbar";
import Master from "./components/layouts/Master";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";

export const BooksContext = createContext();

export default function App() {
  const [state, setState] = useState({
    booklist: productApi,
    cart: [],
  });

  const addToCart = (book) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === book.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === book.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...book, count: 1 }],
    });
  };

  const removeFromCart = (id) =>
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id),
    });

  const increase = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ),
    });
  };

  const decrease = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      ),
    });
  };

  return (
    <BooksContext.Provider
      value={{ state, addToCart, increase, decrease, removeFromCart }}
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<Master />}>
          <Route index path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BooksContext.Provider>
  );
}
