import React, { useState } from "react";

export default function Register() {
    interface FormInterface {
        [key: string]: string
    }

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let formData = new FormData(event.currentTarget)
        let formObj: FormInterface = {}
        for(let [key, value] of Array.from(formData.entries())) {
            formObj[key] = value.toString()
        }
        handleRegister(formObj['name'], formObj['email'], formObj['password']);
    }

    const handleRegister = (name:string, email: string, password:string) => {
        console.log(name, email, password);
    }

    return (
      <div className="min-h-screen bg-[url('../../images/best_sell_5.jpg')] bg-cover bg-no-repeat">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-orange">
              Đăng ký
            </h2>
          </div>
        </div>
  
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border rounded-lg bg-white border-orange">
            <form onSubmit={submit} className="space-y-6 px-5 pt-6">
            <div>
                <label className="block text-base font-medium leading-6 text-gray-900">
                  Họ và tên
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    placeholder="Họ và tên"
                    required
                    autoComplete="name"
                    className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-base sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label className="block text-base font-medium leading-6 text-gray-900">
                  Số điện thoại
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="phone"
                    placeholder="Số điện thoại"
                    required
                    autoComplete="phone"
                    className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-base sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label className="block text-base font-medium leading-6 text-gray-900">
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
                  <label className="block text-base font-medium leading-6 text-gray-900">
                    Mật khẩu
                  </label>
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
                  Đăng ký
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-base text-gray-500 pb-6">
              Đã có tài khoản?{' '}
              <a href="/login" className="font-semibold leading-6 text-orange hover:text-orange">
                Đăng nhập
              </a>
            </p>
          </div>
      </div>
    );
  }
  