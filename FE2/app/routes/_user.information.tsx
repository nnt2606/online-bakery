import { useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import userStore from "~/zustand/userStore";

export default function Information() {
    const {name, isRehydrated, isAuthenciated} = userStore();
    const navigate = useNavigate();

    if (!isRehydrated) {
        return <p>Loading...</p>;
      }
    
    if (!isAuthenciated) {
        if(confirm("Bạn chưa đăng nhập")) navigate("/");
    }
    
    

  const submit = () => {};

  return (
    <div className="min-h-screen bg-[url('../../images/best_sell_5.jpg')] bg-cover bg-no-repeat">
      <section>
        <div className="flex min-h-full flex-1 flex-col justify-center px-5 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-orange">
              Đổi mật khẩu
            </h2>
          </div>
        </div>

        <div className="flex gap-2 justify-center items-center max-w-xl mx-auto border rounded-md bg-white border-orange">
          <div className="md:shrink-0 pl-10">
            <p className="py-5 font-semibold text-orange text-lg ml-10">{name}</p>
            <img src="https://picsum.photos/200" alt="img"/>
          </div>

          <div className="grow">
            <form onSubmit={submit} className="space-y-6 px-5 pt-6">
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-base font-medium leading-6 text-gray-900"
                  >
                    Mật khẩu cũ
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password1"
                    type="password"
                    className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-base sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-base font-medium leading-6 text-gray-900"
                  >
                    Mật khẩu mới
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password2"
                    type="password"
                    className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-base sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-base font-medium leading-6 text-gray-900"
                  >
                    Nhập lại mật khẩu mới
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password3"
                    type="password"
                    className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-base sm:leading-6"
                  />
                </div>
              </div>

              <div className="py-5">
                <button
                  type="submit"
                  className=" flex w-full justify-center rounded-md bg-orange px-3 py-1.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                >
                  Lưu
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
