import React from "react";
import { useDispatch } from "react-redux";
import { addcartAction } from "../../features/addcart/addCart.slice";

export default function Itemdesktop({
  title,
  image,
  price,
  value,
  id,
  discount,
}) {
  const formattedNumber = (number) => {
    let value = new Intl.NumberFormat("vi-VN", {
      style: "decimal",
      minimumFractionDigits: 3,
    }).format(number / 1000);
    return value;
  };

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const check = event.nativeEvent.data;
    const some = event.target.value;
    if (check === "/") return;
    if (
      (some > 1 && /^[1-9]\d*$/.test(check) && some < 1000) ||
      (check === null && some)
    ) {
      dispatch(addcartAction.changevalue({ id, some }));
    }
  };

  return (
    <tr>
      <th scope="row">
        <div className="item">
          <div className="title_item">{title}</div>
          <div className="img_item">
            <img src={image} alt={title} />
          </div>
        </div>
      </th>
      <td>{formattedNumber((price * (100 - discount)) / 100)} VNĐ</td>
      <td className="number_items">
        <div className="box-number d-flex align-items-center">
          <span
            className="subtract"
            onClick={() => dispatch(addcartAction.sub({ id }))}
          >
            <i className="bi bi-dash-circle"></i>
          </span>
          <input type="tel" value={value} onChange={handleInputChange} />
          <span
            className="add"
            onClick={() => dispatch(addcartAction.plus({ id }))}
          >
            <i className="bi bi-plus-circle"></i>
          </span>
        </div>
      </td>
      <td>{formattedNumber(((price * (100 - discount)) / 100) * value)}VNĐ</td>
      <td
        className="close_item"
        onClick={() => dispatch(addcartAction.remove({ id }))}
      >
        <i className="bi bi-x text-bg-danger1"></i>
      </td>
    </tr>
  );
}
