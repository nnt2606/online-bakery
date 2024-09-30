import { NavLink } from "@remix-run/react";
import { useEffect, useState } from "react";
import { getAllOrder} from "../API/orderAPI";
import OrderInfo from "~/interface/OrderInfor";
import userStore from "~/zustand/userStore";
import { StatusTransfer } from "~/variable/statusTransfer";

export default function ManageOrder() {
  const[data, setData] = useState<OrderInfo[]>([]);
  const id = userStore((state) => state.id); 

    const fetchData = async() => {
        const response = await getAllOrder(id);
        if(response.status === 200) {
            setData(response.data);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    if(data.length === 0) {
      return(
        <div className="min-h-screen">
          <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
        </div>
      )
    }
  

  return (
    <div className="min-h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-5 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-orange">
            Quản lý đơn hàng
          </h2>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-6 lg:-mx-8">
          <div className="inline-bloc min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-base font-light text-surface dark:web-white">
                <thead className="border-b border-neural-200 font-medium dark:border-white/10">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      STT
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Thời gian
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Tổng số tiền
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Trạng thái
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Hành động
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data
                  .sort((a, b) => Number(b.id) - Number(a.id))
                  .map((item, index) => (
                    <tr className="border-b border-neutral-200">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.date}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.total}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {StatusTransfer.find((transfer) => transfer.status === item.status)?.to || item.status}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 cursor-pointer text-orange font-semibold">
                        <NavLink to={`/order-details/${item.id}`}>
                          Xem chi tiết
                        </NavLink>
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
  );
}
