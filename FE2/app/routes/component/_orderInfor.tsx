import userStore from "~/zustand/userStore";
import Detail from "./_orderStatic";
import Product from "~/interface/Products";
import OrderInfo from "~/interface/OrderInfor";
import { StatusTransfer } from "~/variable/statusTransfer";

interface OrderInfoProps {
  infor: OrderInfo;
}

const OrderInfor: React.FC<OrderInfoProps> = ({ infor }) => {
  const name = userStore((state) => state.name);

  return (
    <div className="">
      <div className="flex min-h-full flex-1 flex-col justify-center px-5 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-orange">
            Thông tin đơn hàng
          </h2>
        </div>
      </div>

      <div className="bg-white max-w overflow-hidden sm:rounded-lg py-5 pb-5">
        <div className="">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-lg font-medium text-gray-500">
                Tên khách hàng
              </dt>
              <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                {name}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-lg font-medium text-gray-500">Địa chỉ</dt>
              <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                {infor.address}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-lg font-medium text-gray-500">Thời gian</dt>
              <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                {infor.date}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-lg font-medium text-gray-500">
                Trạng thái đơn hàng
              </dt>
              <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                {StatusTransfer.find(
                  (transfer) => transfer.status === infor.status
                )?.to || infor.status}
              </dd>
            </div>
            {infor.note && (
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-lg font-medium text-gray-500">Ghi chú</dt>
                <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                  {infor.note}
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>

      <Detail data={infor.items} />
    </div>
  );
};

export default OrderInfor;
