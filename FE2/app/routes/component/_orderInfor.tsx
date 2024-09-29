import userStore from "~/zustand/userStore";
import Detail from "./_orderStatic";
import Product from "~/interface/Products";
import OrderInfo from "~/interface/OrderInfor";

interface OrderInfoProps {
    data: Product[];
    infor: OrderInfo;
}

const OrderInfor:React.FC<OrderInfoProps> = ({data, infor}) =>  {
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

      <div className="px-10 text-lg pb-10">
        <p>Tên khách hàng: {name}</p>
        <p>Địa chỉ: {infor.address}</p>
        <p>Thời gian: {infor.date}</p>
        <p></p>
      </div>

      <Detail data={data} />
    </div>
  );
}

export default OrderInfor;
