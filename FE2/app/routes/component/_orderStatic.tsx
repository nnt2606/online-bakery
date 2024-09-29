import OrderInfo from "~/interface/OrderInfor";
import Product from "~/interface/Products";

interface DetailProps {
  data: Product[];
}

const Detail: React.FC<DetailProps> = ({ data}) => {

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
                      <td
                        className="whitespace-nowrap px-6 py-4 align-midde text-center"
                      >
                        <div className=" fitems-center mx-auto">
                          {item.quantity}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.price * item.quantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <td
                    colSpan={3}
                    className="p-4 text-left font-bold text-slate-800 border-t border-slate-300 text-xl"
                  >
                    Tổng tiền:
                  </td>
                  <td
                    colSpan={3}
                    className="p-4 font-semibold text-slate-800 border-t border-slate-300 text-xl"
                  >
                    {data.reduce(
                      (total, item) => total + item.quantity * item.price,
                      0
                    )}{" "}
                    VNĐ
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

export default Detail;
