import React from "react";
import { useSelector } from "react-redux";

export default function Totalprice({ name, value, price, discount }) {

  const formattedNumber = (number) => {
    let value = new Intl.NumberFormat("vi-VN", {
      style: "decimal",
      minimumFractionDigits: 3,
    }).format(number / 1000);
    return value;
  };

  return (
    <div className="item-total-money">
      <div className="name-item-check">
        {name} x ({value})
      </div>
      <div className="money-item-check">
        {formattedNumber(((price * (100 - discount)) / 100) * value)}VNĐ
      </div>
    </div>
  );
}
