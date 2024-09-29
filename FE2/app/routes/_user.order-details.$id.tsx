import userStore from "~/zustand/userStore";
import OrderInfor from "./component/_orderInfor";

export default function Order() {
  const isAdmin = userStore((state) => state.isAdmin);
  const data = [
    {
      id: "123",
      img: "https://picsum.photos/200",
      name: "picture",
      price: 12000,
      quantity: 2,
      description: "mo ta",
      category: "banh ngot",
      status: "Da duyet",
      sold: 10
    },
  ];

  const infor = {
    date: "12h30 29/09/2024",
    address: "dai hoc Bac Ha",
    note: "",
  };

  const handleOrder = () => {

  }

  return (
    <div className="min-h-screen">
      <OrderInfor data={data} infor={infor} />

      {isAdmin && (
        <div>
          <button
            onClick={handleOrder}
            className="mx-[50px] px-6 py-1 border-2 border-orange text-orange hover:bg-orange hover:text-white transition-all rounded-xl"
          >
            Duyệt đơn hàng
          </button>
        </div>
      )}
    </div>
  );
}
