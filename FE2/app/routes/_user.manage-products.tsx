import { MdBorderColor, MdDelete } from "react-icons/md";
import ProductDetail from "./component/_productDetail";
import Product from "~/interface/Products";
import { useEffect, useState } from "react";
import { getAllProduct } from "~/API/productAPI";

export default function ManageProduct() {
    const[data, setData] = useState<Product[]>([]);

    const fetchData = async() => {
        const response = await getAllProduct();
        if(response.status === 200) {
            setData(response.data);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const handleDelete = (item: Product) => {

    }

    const handleUpdate = (item: Product) => {

    }
    
  return (
    <div className="min-h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-5 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-orange">
            Quản lý sản phẩm
          </h2>
        </div>
      </div>

      <div>
        Button add new
      </div>
      
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
                            src={item.img}
                            alt="img"
                            className="mx-auto max-h-[100px] w-auto"
                          />
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.price}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 item-center inline-flex justify-center mt-[33px]">
                          <MdDelete
                            size={25}
                            className="text-red-600 cursor-pointer mr-5"
                            onClick={() => handleDelete(item)}
                          />
                          <MdBorderColor
                            size={25}
                            className="text-green-600 cursor-pointer ml-2"
                            onClick={() => handleUpdate(item)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
