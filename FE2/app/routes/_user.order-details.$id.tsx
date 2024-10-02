import userStore from "~/zustand/userStore";
import OrderInfor from "./component/_orderInfor";
import { useParams } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import OrderInfo from "~/interface/OrderInfor";
import { approveOrder, cancelOrder, closeOrder, getOrderDetail, rejectOrder } from "~/API/orderAPI";
import { StatusTransfer } from "~/variable/statusTransfer";

export default function Order() {
  const isAdmin = userStore((state) => state.isAdmin);
  const adminId = userStore((state) => state.id);
  const { id } = useParams();

  const [data, setData] = useState<OrderInfo>();

  const fetchData = async () => {
    const response = await getOrderDetail(id);
    if (response.status === 200) {
      setData(response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const jsonObject = {
    adminId: Number(adminId), // Convert "1" to the number 1
  };

  const handleApprove = async() => {
    const response = await approveOrder(id, jsonObject);
    if(response.status === 200) {
      await fetchData();
    }
  }

  const handleReject = async() => {
    const response = await rejectOrder(id, jsonObject);
    if(response.status === 200) {
      await fetchData();
    }
  }

  const handleCancel = async() => {
    const response = await cancelOrder(id, jsonObject);
    if(response.status === 200) {
      await fetchData();
    }
  }

  const handleClose = async() => {
    const response = await closeOrder(id, jsonObject);
    if(response.status === 200) {
      await fetchData();
    }
  }

  if (data === undefined) {
    return (
      <div className="min-h-screen">
        <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <OrderInfor infor={data} />

      {isAdmin && (
        <div className="pb-20">
          {data.status === "uncheck" && (
            <div className="flex justify-between">
              <button onClick={handleApprove}
                  className="ml-10 w-2/5 rounded-md bg-green-600 px-3 py-1.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 hover:text-black "
                >
                  Chuyển sang trạng thái đang vận đơn
                </button>
                <button onClick={handleReject}
                  className="mr-10 w-2/5 rounded-md bg-red-600 px-3 py-1.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 hover:text-black "
                >
                  Từ chối vận đơn
                </button>
            </div>
          )}
          {data.status === "approve" && (
            <div className="flex justify-between">
              <button onClick={handleClose}
                  className="ml-10 w-2/5 rounded-md bg-green-600 px-3 py-1.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 hover:text-black "
                >
                  Hoàn thành đơn hàng
                </button>
            </div>
          )}
          {/* {data.status === "reject" && (
            <div className="flex justify-between">
              <button onClick={handleCancel}
                  className="mr-10 w-2/5 rounded-md bg-red-600 px-3 py-1.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 hover:text-black "
                >
                  Hủy đơn hàng
                </button>
            </div>
          )} */}
          {(data.status === "close" || data.status=== "cancel" || data.status === "reject") && (
            <div className="flex justify-between">
             <h1 className="text-xl font-semibold text-gray-700">Đơn hàng đã kết thúc!</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
