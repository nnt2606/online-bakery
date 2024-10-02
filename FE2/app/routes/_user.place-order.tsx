import cartStore from "~/zustand/cartStore";
import Detail from "./component/_orderStatic";
import { useEffect, useState } from "react";
import userStore from "~/zustand/userStore";
import { Button } from "~/layouts/Button";
import { useNavigate } from "@remix-run/react";
import { getCart } from "~/API/cartAPI";
import { Cart } from "~/interface/Cart";

export default function PlaceOrder() {
  const [data, setData] = useState<Cart[]>([]);
  const name = userStore((state) => state.name);
  const id = userStore((state) => state.id);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
     console.log(id); 
      const response = await getCart(id);
      setData(response.data);
    } catch (error) {
      alert("Không thể lấy dữ liệu giỏ hàng! Hãy load lại");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

      <Detail data={data} />

      <button
        onClick={handleOrder}
        className="mx-[50px] px-6 py-1 border-2 border-orange text-orange hover:bg-orange hover:text-white transition-all rounded-xl"
      >
        Đặt hàng
      </button>
    </div>
  );
}
