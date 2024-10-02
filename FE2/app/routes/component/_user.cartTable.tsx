import { NavLink } from "@remix-run/react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import Product from "../../interface/Products";
import Products from "../products";
import cartStore from "~/zustand/cartStore";
import { Cart } from "~/interface/Cart";



interface ProductTableProps {
  data: Cart[];
  handleQuantityChange: (id: string, newQuantity: number) => void;
  handleDelete: (item: Cart) => void;
}

const CartTable: React.FC<ProductTableProps> = ({ data, handleQuantityChange, handleDelete}) => {



  const handleIncrement = (quantity: number, id:string) => {
    handleQuantityChange(id, quantity + 1);

};

const handleDecrement = (quantity: number, id:string) => {
    handleQuantityChange(id, quantity - 1);
};

  

  return (
    <div className="pb-10">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-6 lg:-mx-8">
          <div className="inline-bloc min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-base font-light text-surface">
                <thead className="border-b border-neural-200 font-medium">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      STT
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Hình ảnh
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Tên sản phẩm
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Số lượng
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Giá
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Hành động
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr className="border-b border-neutral-200">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-center align-middle">
                        <img
                          src={item.item.img}
                          alt="img"
                          className="mx-auto max-h-[100px] w-auto"
                        />
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.item.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 align-midde text-center" key={index}>
                        <div className="relative flex items-center">
                          <button
                            type="button"
                            id="decrement-button"
                            data-input-counter-decrement="quantity-input"
                            onClick={() => handleDecrement(item.quantity, item.item.id)}
                            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                          >
                            <svg
                              className="w-3 h-3 text-gray-900 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 2"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 1h16"
                              />
                            </svg>
                          </button>
                          <input
                            type="text"
                            id="quantity-input"
                            data-input-counter
                            aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm block w-full py-2.5 dark:bg-gray-700 dark:border-gray-60 outline-none cursor-none"
                            value={item.quantity}
                            readOnly
                          />
                          <button
                            type="button"
                            id="increment-button"
                            data-input-counter-increment="quantity-input"
                            onClick={() => handleIncrement(item.quantity, item.item.id)}
                            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                          >
                            <svg
                              className="w-3 h-3 text-gray-900 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 1v16M1 9h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.item.price * item.quantity}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 align-middle item-center">
                            <MdDelete size={25} className="text-red-600 mx-auto cursor-pointer" onClick={() => handleDelete(item)}/>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                    <td colSpan={3} className="p-4 text-left font-bold text-slate-800 border-t border-slate-300 text-xl">
                        Tổng tiền: 
                    </td>
                    <td colSpan={3} className="p-4 font-semibold text-slate-800 border-t border-slate-300 text-xl text-right pr-[200px]">
                        {data.reduce((total, item) => total + item.quantity*item.item.price, 0)} VNĐ
                    </td>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTable;
