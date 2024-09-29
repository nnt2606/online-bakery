import cartStore from "~/zustand/cartStore";
import Detail from "./component/_orderStatic";
import { useEffect, useState } from "react";
import Product from "~/interface/Products";
import userStore from "~/zustand/userStore";
import { Button } from "~/layouts/Button";
import { useNavigate } from "@remix-run/react";

export default function PlaceOrder() {
  const cart = cartStore((state) => state.cart);
  const name = userStore((state) => state.name);
  const navigate = useNavigate();

  const handleOrder = () => {
    if (confirm("Đặt hàng thành công!")) navigate("/");
  };

  return (
    <div className="min-h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-5 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-orange">
            Xác nhận đặt hàng
          </h2>
        </div>
      </div>

      <Detail data={cart} />

      <button
        onClick={handleOrder}
        className="mx-[50px] px-6 py-1 border-2 border-orange text-orange hover:bg-orange hover:text-white transition-all rounded-xl"
      >
        Đặt hàng
      </button>
    </div>
  );
}
