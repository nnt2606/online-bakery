import React, { useEffect } from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import Itemdesktop from "./Cartcompoennt/Itemdesktop";
import Itemmobile from "./Cartcompoennt/Itemmobile";
import Totalprice from "./Cartcompoennt/Totalprice";
import { useSelector } from "react-redux";

export default function Cart() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const addcart = useSelector((state) => state.addcart);

  const formattedNumber = (number) => {
    let value = new Intl.NumberFormat("vi-VN", {
      style: "decimal",
      minimumFractionDigits: 3,
    }).format(number / 1000);
    return value;
  };

  const totalMoney = addcart.item
    .map((data) => ((data.price * (100 - data.discount)) / 100) * data.value)
    .reduce((a, b) => Number(a) + Number(b), 0);
  return (
    <div className="container-cart">
      <h2>GIỎ HÀNG</h2>
      {!addcart.item.length ? (
        <div className="text-center">
          <h5>Không có sản phẩm nào trong giỏ</h5>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            {/* cart desktop */}
            <div className="col-lg-8 d-sm-block d-none">
              <table className="table text-center">
                <thead className="table-primary">
                  <tr>
                    <th scope="col">Sản phẩm</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Tổng tiền</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {addcart.item.map((item) => (
                    <Itemdesktop
                      price={item.price}
                      image={item.image}
                      value={item.value}
                      title={item.name}
                      id={item.id}
                      key={item.id}
                      discount={item.discount}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-12 d-block d-sm-none">
              <div className="container-item-2 mb-2">
                {/**Đây là chỗ để item mobile */}
                {addcart.item.map((item) => (
                  <Itemmobile
                    price={item.price}
                    image={item.image}
                    value={item.value}
                    title={item.name}
                    id={item.id}
                    key={item.id}
                    discount={item.discount}
                  />
                ))}
              </div>
            </div>
            <div className="col-lg-4 col-12">
              {/* total price */}
              <div className="total_price">
                <h3>Tổng tiền</h3>
                <div className="box-total-price">
                  <div className="box-item-money">
                    {/* {data.map((data) =>
                      data.value ? (
                        <Totalprice
                          name={data.name}
                          price={data.price}
                          value={data.value}
                          key={data.name}
                          discount={data.discount}
                        />
                      ) : (
                        ""
                      )
                    )} */}
                    {addcart.item.map((data) => (
                      <Totalprice
                        name={data.name}
                        price={data.price}
                        value={data.value}
                        key={data.name}
                        discount={data.discount}
                        s
                      />
                    ))}
                  </div>
                  <div className="total_money">
                    <p>Tổng</p>
                    <div className="total-check">
                      {formattedNumber(totalMoney)} VNĐ
                    </div>
                  </div>
                </div>
                <div className="button-oder text-center mb-2">
                  <Link to="/cart/checkout">
                    <button>Tiến hành thanh toán</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
