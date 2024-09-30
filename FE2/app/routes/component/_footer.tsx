import userStore from "~/zustand/userStore";
import imgs from "../../../public/images/cooker1.png";
import { NAVBAR_ADMIN, NAVBAR_USER } from "~/variable/constant";

export default function Footer() {
  const { isAdmin, isAuthenciated } = userStore();

  return (
    <div className="bg-black text-white mt8 md:mt-0 bottom-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4 cursor-default">Online Bakery</h1>
          <p className="text-sm cursor-default">
            ❝ Sáng tạo, kiên trì và chăm chỉ là những yếu tố tạo nên sự thành
            công của người thợ làm bánh ❠
          </p>
          <img src={imgs} alt="img" className="w-1/4 cursor-default" />
        </div>
        <div>
          <h1
            className="font-medium text-xl pb-4pt5
                md:pt-0 py-4 cursor-default"
          >
            Link
          </h1>
          <nav className="flex flex-col gap-2">
            <a
              href="/"
              className="hover:text-orange transition-all cursor-pointer"
            >
              Menu
            </a>
            <a
              href="/products"
              className="hover:text-orange transition-all cursor-pointer"
            >
              Sản phẩm
            </a>
          </nav>
        </div>
        <div>
          <h1
            className="font-medium text-xl pb-4pt5
                md:pt-0 py-4 cursor-default"
          >
            Others
          </h1>
          {isAuthenciated ? (
            <div>
              {isAdmin ? (
                <nav className="flex flex-col gap-2">
                  {NAVBAR_ADMIN.map((item) => (
                    <a
                      href={item.path}
                      className="hover:text-orange transition-all cursor-pointer"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              ) : (
                <nav className="flex flex-col gap-2">
                  {NAVBAR_USER.map((item) => (
                    <a
                      href={item.path}
                      className="hover:text-orange transition-all cursor-pointer"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              )}
            </div>
          ) : (
            <nav className="flex flex-col gap-2">
              <a
                href="/login"
                className="hover:text-orange transition-all cursor-pointer"
              >
                Đăng nhập
              </a>
              <a
                href="/register"
                className="hover:text-orange transition-all cursor-pointer"
              >
                Đăng ký
              </a>
            </nav>
          )}
        </div>
        <div>
          <h1
            className="font-medium text-xl pb-4pt5
                md:pt-0 py-4 cursor-default"
          >
            Contact us
          </h1>
          <div className="flex flex-col gap-2">
            <p className="transition-all cursor-default">
              Online bakery
            </p>
            <p className="transition-all cursor-default">
              +98 123 456 789
            </p>
            <p className="transition-all cursor-default">
              Social Media
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center py-5 cursor-default">
          @copyRight developed by <span className="text-orange">MTN</span> | All
          rights reserved
        </p>
      </div>
    </div>
  );
}
