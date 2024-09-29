import { NavLink } from "@remix-run/react";
import { NAVBAR_USER, NAVBAR_ADMIN } from "~/variable/constant";
import userStore from "~/zustand/userStore";

export default function UserPanel() {
  const isAdmin = userStore((state) => state.isAdmin);

  return (
    <div className="min-h-screen">
      {isAdmin === false ? (
        <div>
          <div className="text-xl font-semibold ml-10 mb-5 text-orange cursor-default">
            Bảng quản trị của người dùng
          </div>
          <ul className="flex sm:flex-col overflow-hidden content-center justify-between text-lg font-semibold">
            {NAVBAR_USER.map(({ path, label, icon }) => (
              <li className="hover:text-orange py-2">
                <NavLink className="truncate" to={path}>
                  <div className="w-7 sm:mx-2 mx-4 inline-flex">{icon}</div>
                  <span className="hidden sm:inline">{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <div className="text-xl font-semibold ml-10 mb-5 text-orange cursor-default">
            Bảng quản trị của Admin
          </div>
          <ul className="flex sm:flex-col overflow-hidden content-center justify-between text-lg font-semibold">
          {NAVBAR_ADMIN.map(({ path, label, icon }) => (
            <li className="hover:text-orange py-2">
              <NavLink className="truncate" to={path}>
                <div className="w-7 sm:mx-2 mx-4 inline-flex">{icon}</div>
                <span className="hidden sm:inline">{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        </div>
      )}
    </div>
  );
}
