import React, { createContext, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Subhere from "./Subhere";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export const ProviderShow = createContext();

const getProduct = async () => {
  const res = await fetch(`https://api-product-g1bk.vercel.app/product`);
  const data = await res.json();
  return data;
};

export default function Layout() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getProduct().then(setCart);
  }, []);

  const handleData = (id) => {
    setCart((prev) => {
      const newData = [...prev];
      for (let i = 0; i < newData.length; i++) {
        if (newData[i].id == id) {
          newData[i].value++;
        }
      }
      return newData;
    });
  };

  const handleTwoway = (product) => {
    setCart(product);
  };

  const notify = () =>
    toast.success("Thêm vào giỏ hàng thành công", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: false,
      theme: "light",
    });

  const alldata = {
    handleData,
    notify,
    data: cart,
    handleTwoway,
  };

  let lengthdata = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].value) lengthdata++;
  }

  return (
    <ProviderShow.Provider value={alldata}>
      <Header data={cart} />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <Outlet />
      <Subhere />
      <Footer />
    </ProviderShow.Provider>
  );
}
