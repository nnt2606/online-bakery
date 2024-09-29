import { NavLink } from "@remix-run/react";

export default function ManageOrder() {
  const data = [
    {
      id: 1,
      time: "12h30 29/09/2024",
      total: 120000,
      status: "Duyệt",
    },
  ];
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
                  {data.map((item, index) => (
                    <tr className="border-b border-neutral-200">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.time}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.total}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.status}
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
