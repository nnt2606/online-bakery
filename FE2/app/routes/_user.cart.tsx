import { useState } from "react";
import CartTable from "./component/_user.cartTable";
import Product from "~/interface/Products";
import { SiToptal } from "react-icons/si";
import { Button } from "~/layouts/Button";
import cartStore from "~/zustand/cartStore";

export default function Cart() {
  const data = cartStore((state) => state.cart);
  const cartChange = cartStore((state) => state.changeQuantity);

  const [products, setProducts] = useState<Product[]>(data);

  const handleDelete = (item: Product) => {
    const updateCart = products.filter((itemCart) => itemCart.id !== item.id);
    setProducts(updateCart);
    cartChange(updateCart);
  }

  const handleQuantityChange = (index: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      return;
    }
    const updatedProducts = products.map((product, i) =>
      i === index ? { ...product, quantity: newQuantity } : product
    );
    setProducts(updatedProducts);
    cartChange(updatedProducts);
  };

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
          data={products}
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
