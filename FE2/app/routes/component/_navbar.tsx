import { Link, NavLink, useNavigate } from "@remix-run/react";
import { Button } from "../../layouts/Button";
import { BiChevronDown, BiRestaurant } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { useState } from "react";
import userStore from "~/zustand/userStore";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const isAdmin = userStore((state) => state.isAdmin);
  const userInfor = userStore((state) => state.name);
  const isAuthenciated = userStore((state) => state.isAuthenciated);
  const logout = userStore((state) => state.logout);

  const handleChange = () => {
    setMenu(!menu);
  };

  const handleLogout = () =>{
    logout();
    navigate("/");
  }

  const handlePanel = () => {

  }

  return (
    <div className="fixed-full">
      <div>
        <div className="flex felx-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
          <NavLink to="/" className="flex flex-row items-center cursor-pointer">
            <span>
              <BiRestaurant size={32} />
            </span>
            <h1 className="text-xl font-semibold">Online bakery</h1>
          </NavLink>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-7">
            <NavLink
              to="/"
              className="hover:text-orange transition-all cursor-pointer"
            >
              Trang chủ
            </NavLink>

            <NavLink
              to="/products"
              className="hover:text-orange transition-all cursor-pointer"
            >
              Sản phẩm
            </NavLink>
          </nav>

          {isAuthenciated ? (
            <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-4">
                <NavLink to="/information" className="text-gray-500 transition-all cursor-pointer">{userInfor}</NavLink>
                <button className="px-6 py-1 border-2 border-orange text-orange hover:bg-orange hover:text-white transition-all rounded-xl"
                    onClick={handleLogout}
                >
                    Đăng xuất
                </button>
            </nav>
          ) : (
            <div>
              <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-7">
                <NavLink
                  to="/login"
                  className="hover:text-orange transition-all cursor-pointer"
                >
                  Đăng nhập
                </NavLink>

                <Button path="/register" title="Đăng ký" />
              </nav>
            </div>
          )}

          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={() => setMenu(!menu)} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={() => setMenu(!menu)} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white lef-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <NavLink
            to="/"
            className="hover:text-orange transition-all cursor-pointer"
          >
            Trang chủ
          </NavLink>
          <NavLink
            to="/products"
            className="hover:text-orange transition-all cursor-pointer"
          >
            Sản phẩm
          </NavLink>
          <NavLink
            to="/login"
            className="hover:text-orange transition-all cursor-pointer"
          >
            Đăng nhập
          </NavLink>
          <Button path="/register" title="Đăng ký" />
        </div>
      </div>
    </div>
  );
}
