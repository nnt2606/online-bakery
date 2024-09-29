import { NavLink } from "@remix-run/react";
import { MdHistory, MdOutlinePassword, MdOutlineShoppingCart } from "react-icons/md";

export default function UserPanel() {
  return (
    <div className="min-h-screen">
      <ul className="flex sm:flex-col overflow-hidden content-center justify-between text-lg font-semibold">
        <li className="hover:text-orange">
          <NavLink className="truncate" to="/information">
            <MdOutlinePassword className="w-7 sm:mx-2 mx-4 inline" />
            <span className="hidden sm:inline">Đổi mật khẩu</span>
          </NavLink>
        </li>

        <li className="hover:text-orange">
          <NavLink className="truncate" to="/orders">
            <MdHistory className="w-7 sm:mx-2 mx-4 inline" />
            <span className="hidden sm:inline">Đơn hàng</span>
          </NavLink>
        </li>

        <li className="hover:text-orange">
          <NavLink className="truncate" to="/cart">
            <MdOutlineShoppingCart className="w-7 sm:mx-2 mx-4 inline" />
            <span className="hidden sm:inline">Giỏ hàng</span>
          </NavLink>
        </li>

      </ul>
    </div>
  );
}
