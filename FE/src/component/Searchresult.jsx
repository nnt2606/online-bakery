import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

export default function Searchresult({
  image,
  name,
  price,
  star,
  discount,
  id,
}) {
  const formattedNumber = (number) => {
    let value = new Intl.NumberFormat("vi-VN", {
      style: "decimal",
      minimumFractionDigits: 3,
    }).format(number / 1000);
    return value;
  };
  const countStar = (star) => {
    let resultStart = "";
    let full;
    let half;
    let nostar;
    if (star % 1 == 0) {
      full = star;
      nostar = 5 - star;
      half = 0;
    } else {
      full = star - 0.5;
      nostar = 5 - star - 0.5;
      half = 1;
    }
    for (let i = 0; i < full; i++) {
      resultStart += `<i className="bi bi-star-fill"></i>`;
    }
    resultStart += half ? `<i className="bi bi-star-half"></i>` : "";
    for (let i = 0; i < nostar; i++) {
      resultStart += `<i className="bi bi-star"></i>`;
    }
    return parse(resultStart);
  };
  return (
    <Link to={`/menu/detail/${id}`} className="no-decoration">
      <div className="box_result d-flex">
        <div className="result_img">
          <img src={image} alt={name} />
        </div>
        <div className="result_text">
          <div className="name_result">
            <h5>{name}</h5>
          </div>
          <del style={{ display: discount ? "block" : "none" }}>
            <i>{formattedNumber(price)} VNĐ</i>
          </del>
          <div className="price_result">
            {" "}
            {formattedNumber((price * (100 - discount)) / 100)}
            VNĐ
          </div>
          <div className="description_result">{countStar(star)}</div>
        </div>
      </div>
    </Link>
  );
}
