import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Cart from "./page/Cart.jsx";
import Contact from "./page/Contact.jsx";
import Home from "./page/Home.jsx";
import Menu from "./page/Menu.jsx";
import News from "./page/News.jsx";
import Layout from "./component/Layout.jsx";
import Newdetails from "./page/Newdetails.jsx";
import Checkout from "./page/Checkout.jsx";
import DetailItem from "./page/DetailItem";
import "./main.css";
import { Provider } from "react-redux";
import store from "./features/store";
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/cart/checkout", element: <Checkout /> },
      { path: "/contact", element: <Contact /> },
      { path: "/menu", element: <Menu /> },

      { path: "/menu/:pagenumber", element: <Menu /> },
      { path: "/new", element: <News /> },
      { path: "/new/newdetails", element: <Newdetails /> },
      { path: "menu/detail/:iditem", element: <DetailItem /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
