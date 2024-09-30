import { MdAllInbox, MdApps, MdHistory, MdOutlinePassword, MdOutlineShoppingCart } from "react-icons/md";

export const NAVBAR_USER = [
    {
        path: "/information",
        label: "Đổi mật khẩu",
        icon: <MdOutlinePassword />
    },
    {
        path: "/orders",
        label: "Đơn hàng của bạn",
        icon: <MdHistory />
    },
    {
        path: "/cart",
        label: "Giỏ hàng của bạn",
        icon: <MdOutlineShoppingCart />
    },
]

export const NAVBAR_ADMIN = [
    {
        path: "/information",
        label: "Đổi mật khẩu",
        icon: <MdOutlinePassword />
    },
    {
        path: "/manage-products",
        label: "Quản lý sản phẩm",
        icon: <MdApps />
    },
    {
        path: "/manage-orders",
        label: "Quản lý đơn hàng",
        icon: <MdAllInbox />
    }
]