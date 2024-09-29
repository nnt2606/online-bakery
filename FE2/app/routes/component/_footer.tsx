import imgs from "../../../public/images/cooker1.png";

export default function Footer() {
  return (
    <div className="bg-black text-white mt8 md:mt-0 bottom-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">Online Bakery</h1>
          <p className="text-sm">
          ❝ Sáng tạo, kiên trì và chăm chỉ là những yếu tố tạo nên sự
          thành công của người thợ làm bánh ❠
          </p>
          <img src={imgs} alt="img" className="w-1/4"/>
        </div>
        <div>
          <h1
            className="font-medium text-xl pb-4pt5
                md:pt-0 py-4"
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
            <a
              href="/about-us"
              className="hover:text-orange transition-all cursor-pointer"
            >
              About us
            </a>
          </nav>
        </div>
        <div>
          <h1
            className="font-medium text-xl pb-4pt5
                md:pt-0 py-4"
          >
            Others
          </h1>
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
        </div>
        <div>
          <h1
            className="font-medium text-xl pb-4pt5
                md:pt-0 py-4"
          >
            Contact us
          </h1>
          <div className="flex flex-col gap-2">
            <p className="hover:text-orange transition-all cursor-pointer">
              Online bakery
            </p>
            <p className="hover:text-orange transition-all cursor-pointer">
              +98 123 456 789
            </p>
            <p className="hover:text-orange transition-all cursor-pointer">
              Social Media
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center py-5">
            @copyRight developed by <span className="text-orange">MTN</span> | 
            All rights reserved
        </p>
      </div>
    </div>
  );
}
