import { useState } from "react";
import userStore from "../zustand/userStore";
import { useNavigate } from "@remix-run/react";
import cartStore from "~/zustand/cartStore";

const mockuser = {
  id: "1",
  name: "Ma Thi Nhung",
  email: "nhung@gmail.com",
};

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
    sold: 10,
  },
];

export default function Login() {
  const login = userStore((state) => state.login);
  const navigate = useNavigate();
  const loginCart = cartStore((state) => state.login);

  interface FormInterface {
    [key: string]: string;
  }

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let formObj: FormInterface = {};
    for (let [key, value] of Array.from(formData.entries())) {
      formObj[key] = value.toString();
    }
    handleLogin(formObj["email"], formObj["password"]);
  };

  const handleLogin = (email: string, password: string) => {
    console.log(email, password);
    //handleLogIn API
    //mockuser === userInfor

    //Login success with admin role
    //management data then naviage ( not change these)
    login(mockuser, true);
    loginCart(data);
    if (confirm("Đăng nhập thành công!")) navigate("/");
  };

  const sleep = (ms: number) => {
    new Promise((resolve, reject) => setTimeout(resolve, ms));
  };

  return (
    <div className="min-h-screen bg-[url('../../images/best_sell_5.jpg')] bg-cover bg-no-repeat">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-orange">
            Đăng nhập
          </h2>
        </div>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border rounded-lg bg-white border-orange">
        <form onSubmit={submit} className="space-y-6 px-5 pt-6">
          <div>
            <label
              htmlFor="email"
              className="block text-base font-medium leading-6 text-gray-900"
            >
              Tên đăng nhập
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Tên đăng nhập"
                required
                autoComplete="email"
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
                Mật khẩu
              </label>
              <div className="text-base">
                <a
                  href="#"
                  className="font-semibold text-orange hover:text-orange"
                >
                  Quên mật khẩu ?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Mật khẩu"
                required
                autoComplete="current-password"
                className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-base sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-orange px-3 py-1.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
            >
              Đăng nhập
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-base text-gray-500 pb-6">
          Chưa có tài khoản?{" "}
          <a
            href="/register"
            className="font-semibold leading-6 text-orange hover:text-orange"
          >
            Đăng ký
          </a>
        </p>
      </div>
    </div>
  );
}
