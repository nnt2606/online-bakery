import { useLocation, useNavigate, useParams, useSearchParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import { editProduct, getProductDetail } from "~/API/productAPI";
import OrderInfo from "~/interface/OrderInfor";
import Product from "~/interface/Products";

export default function UpdateProduct() {
  const [data, setData] = useState<Product>();
  const { id } = useParams();
  const navigate = useNavigate();
  interface FormInterface {
    [key: string]: string;
  }

  const fetchData = async () => {
    const response = await getProductDetail(id);
    if (response.status === 200) {
      setData(response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let formObj: FormInterface = {};
    for (let [key, value] of Array.from(formData.entries())) {
      formObj[key] = value.toString();
    }
    handleUpdate(
      formObj["name"],
      formObj["img"],
      parseInt(formObj["price"]),
      formObj["status"],
      formObj["expiration"],
      formObj["category"],
      formObj["description"]
    );
  };

  const handleUpdate = async (
    name: string,
    img: string,
    price: number,
    status: string,
    expiration: string,
    category: string,
    description: string
  ) => {
    const formObj = {
      name: name,
      description: description,
      price: price,
      category: category,
      status: status,
      expiration: expiration,
      img: img,
    }
    try{
      await editProduct(id, formObj);
      if (confirm("Cập nhập sản phẩm thành công!")) navigate("/manage-products");
    }catch(e){
      alert("Cập nhập sản phẩm không thành công! Thử lại!")
    }
  };


  return (
    <div className="min-h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-5 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-orange">
            Cập nhập sản phẩm
          </h2>
        </div>
      </div>

      <form onSubmit={submit} className="space-y-6 px-5 pt-6">
        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Tên sản phẩm
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Tên sản phẩm"
              defaultValue={data?.name}
              required
              className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-base sm:leading-6"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Url ảnh
            </label>
            <input
              type="url"
              name="img"
              defaultValue={data?.img}
              className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-base sm:leading-6"
              placeholder="https://image.com"
              pattern="https://.*"
              size={30}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Giá tiền
            </label>
            <input
              className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-base sm:leading-6"
              id="price"
              name="price"
              type="number"
              defaultValue={data?.price}
              min={1000}
              max={100000000}
              step={1000}
              placeholder="Giá tiền"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Tình trạng sản phẩm
            </label>
            <div className="relative">
              <select
                className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-base sm:leading-6"
                id="status"
                name="status"
                defaultValue={data?.status}
              >
                <option value="available">Còn hàng</option>
                <option value="not_avail">Hết hàng</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Thời hạn sử dụng
            </label>
            <input
              className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-base sm:leading-6"
              id="expiration"
              name="expiration"
              defaultValue={data?.expiration}
              type="text"
              placeholder="Thời hạn sử dụng"
            />
          </div>
        </div>

        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Category
          </label>
          <div className="mt-2">
            <input
              id="category"
              name="category"
              type="text"
              defaultValue={data?.category}
              placeholder="Category"
              required
              className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-base sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Mô tả sản phẩm
          </label>
          <div className="mt-2">
            <textarea
              id="description"
              name="description"
              placeholder="Mô tả sản phẩm"
              rows={4}
              defaultValue={data?.description}
              required
              className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-base sm:leading-6"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mx-[50px] px-6 py-1 border-2 border-orange text-orange hover:bg-orange hover:text-white transition-all rounded-xl"
        >
          Cập nhập sản phẩm
        </button>
      </form>
    </div>
  );
}
