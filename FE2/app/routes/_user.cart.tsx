import { useEffect, useState } from "react";
import CartTable from "./component/_user.cartTable";
import { Cart } from "~/interface/Cart";
import { Button } from "~/layouts/Button";
import { getCart, updateItemToCart, removeItemToCart } from "~/API/cartAPI";
import userStore from "~/zustand/userStore";
import { NavLink } from "react-router-dom";

export default function CartUser() {
  const [data, setData] = useState<Cart[]>([]);
  const id = userStore((state) => state.id);

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

  if (data.length === 0) {
    return (
      <div className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20">
        <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
          <h1 className="font-titleFont text-xl font-bold uppercase">
            Giỏ hàng của bạn trống
          </h1>
          <p className="text-sm text-center px-10 -mt-2">
            Giỏ hàng của bạn đang cảm thấy cô đơn! Hãy giúp giỏ hàng thấy hạnh phúc hơn nhé
          </p>
          <Button title="Tiếp tục mua sắm" path="/products"/>
        </div>
      </div>
    );
  }



  const handleDelete = (item: Cart) => {
    const updateCart = data.filter(
      (itemCart) => itemCart.item.id !== item.item.id
    );
    setData(updateCart);
    remove(item);
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      return;
    }
    const updatedProducts = data.map((product, index) =>
      productId === product.item.id ? { ...product, quantity: newQuantity } : product
    );
    setData(updatedProducts);
    update(productId, newQuantity);
  };

  const update = async(productId: string, quantity: number) => {
    const jsonData = {
      itemId: productId,
      quantity: quantity,
    }
    try{
      const response = await updateItemToCart(id, jsonData);
    } catch(error) {
      alert("Cập nhập giỏ hàng bị lỗi! Thử lại");
    }
  }

  const remove = async(item: Cart) => {
    const jsonData = {
      itemId: item.item.id
    }
    try{
      const response = await removeItemToCart(id, jsonData);
    } catch(error) {
      alert("Cập nhập giỏ hàng bị lỗi! Thử lại");
    }
  }

  return (
    <div className="min-h-screen">
      <div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-5 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-orange">
              Giỏ hàng
            </h2>
          </div>
        </div>
      </div>
      <div>
        <CartTable
          data={data}
          handleQuantityChange={handleQuantityChange}
          handleDelete={handleDelete}
        />
      </div>

      <div className="px-5">
        <Button title="Thanh toán" path="/place-order" />
      </div>
    </div>
  );
}
