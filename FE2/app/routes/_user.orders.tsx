import { NavLink } from "@remix-run/react";
import { useEffect, useState } from "react";
import { getUserOrder } from "~/API/orderAPI";
import OrderInfo from "~/interface/OrderInfor";
import { Button } from "~/layouts/Button";
import { StatusTransfer } from "~/variable/statusTransfer";
import userStore from "~/zustand/userStore";

export default function Orders() {
  const [data, setData] = useState<OrderInfo[]>([]);
  const id = userStore((state) => state.id);

  const fetchData = async () => {
    try {
      const response = await getUserOrder(id);
      setData(response.data);
    } catch (e) {
      alert("Không thể lấy dữ liệu lịch sử đơn hàng! Thử lại!");
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
            Bạn chưa có đơn hàng nào! Đặt hàng ngay
          </h1>
          <Button title="Tạo đơn hàng" path="/cart" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
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
                  {data.map((item, index) => (
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
                        {StatusTransfer.find(
                          (transfer) => transfer.status === item.status
                        )?.to || item.status}
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
