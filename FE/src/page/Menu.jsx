import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./menu.css";
import Menucenter from "./Menucomponent/Menucenter";
import Menuright from "./Menucomponent/Menuright";

export default function Menu() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="container menu">
      <h2 clas="">THỰC ĐƠN</h2>
      <div className="row">
        <Menuright />
        <Menucenter />
      </div>
    </div>
  );
}
