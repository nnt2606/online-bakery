import Detail from "./component/_orderStatic";
import { useEffect, useState } from "react";
import userStore from "~/zustand/userStore";
import { Button } from "~/layouts/Button";
import { useNavigate } from "@remix-run/react";
import { getCart } from "~/API/cartAPI";
import { Cart } from "~/interface/Cart";
import { placeOrder } from "~/API/orderAPI";

export default function PlaceOrder() {
  const [data, setData] = useState<Cart[]>([]);
  const name = userStore((state) => state.name);
  const id = userStore((state) => state.id);
  const navigate = useNavigate();
  interface FormInterface {
    [key: string]: string;
  }

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

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let formObj: FormInterface = {};
    for (let [key, value] of Array.from(formData.entries())) {
      formObj[key] = value.toString();
    }
    handleOrder(formObj["address"], formObj["note"]);
  };

  const handleOrder = async(address: string, note: string) => {
    const total = data.reduce(
      (total, item) => total + item.quantity * item.item.price,
      0
    )
    const jsonObject = {
      accId: id,
      note: note,
      address: address,
      total: total
    }
    try{
      const response = await placeOrder(jsonObject);
      if (confirm("Đặt hàng thành công!")) navigate("/orders");
    } catch(e){
      alert("Đặt hàng không thành công! Thử lại!");
    }
    
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

      <form onSubmit={submit} className="space-y-6 px-5 pt-6">
        <div>
          <label
            className="block text-base font-medium leading-6 text-gray-900"
          >
            Địa chỉ
          </label>
          <div className="mt-2">
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Địa chỉ"
              required
              autoComplete="address"
              className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-base sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            className="block text-base font-medium leading-6 text-gray-900"
          >
            Ghi chú
          </label>
          <div className="mt-2">
            <input
              id="note"
              name="note"
              type="text"
              placeholder="Ghi chú"
              className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-base sm:leading-6"
            />
          </div>
        </div>

        <Detail data={data} />

        <button
          type="submit"
          className="mx-[50px] px-6 py-1 border-2 border-orange text-orange hover:bg-orange hover:text-white transition-all rounded-xl"
        >
          Đặt hàng
        </button>
      </form>
    </div>
  );
}
