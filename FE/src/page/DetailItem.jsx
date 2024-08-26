import React, { useState, useEffect, useContext } from "react";
import "./detailitem.css";
import { useParams } from "react-router-dom";
import Item from "./Menucomponent/Item";
import parse from "html-react-parser";
import { ProviderShow } from "../component/Layout";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addcartAction } from "../features/addcart/addCart.slice";

export default function DetailItem() {
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const getProduct = async () => {
    const res = await fetch(
      `https://api-product-igm3dkn2k-omg2468.vercel.app/product`
    );
    const data = await res.json();
    setData(data);
  };
  useEffect(() => {
    getProduct();
  }, []);

  const dispatch = useDispatch();

  const alldata = useContext(ProviderShow);

  const handleData = (id) => {
    alldata.notify();
    alldata.handleData(id);
  };

  const { iditem } = useParams();

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

  const newitem = data.filter((data) => data.id == iditem)[0];
  const relevantitem = data.filter(
    (data) => data.id != iditem && data.sort === newitem.sort
  );
  return (
    <div>
      <div className="detail-item-container">
        <div className="container">
          <h2>Chi tiết sản phẩm</h2>
          {newitem ? (
            <div className="row">
              <div className="col-lg-4 col-md-6 offset-lg-2 offset-0 col-12">
                <div className="box-img">
                  <img src={newitem.image} alt={newitem.name} />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="box-description">
                  <h3>{newitem.name}</h3>
                  <div className="detail-price d-flex">
                    <b>Giá bán:</b>
                    <del style={{ display: newitem.discount ? "" : "none" }}>
                      <i>{formattedNumber(newitem.price)} VNĐ</i>
                    </del>
                    <div className="real-price">
                      {formattedNumber(
                        (newitem.price * (100 - newitem.discount)) / 100
                      )}
                      VNĐ
                    </div>
                  </div>
                  <div className="detail-star">
                    <b>Đánh giá: {countStar(newitem.star)}</b>
                  </div>
                  <div className="detail-description">
                    <b>Mô tả sản phẩm:</b> {newitem.description}
                  </div>
                  <div className="button-item d-flex">
                    <div
                      className="add-item"
                      onClick={() => {
                        const id = newitem.id;
                        const name = newitem.name;
                        const image = newitem.image;
                        const price = newitem.price;
                        const discount = newitem.discount;
                        alldata.notify();
                        dispatch(
                          addcartAction.add({
                            id,
                            name,
                            image,
                            price,
                            discount,
                          })
                        );
                      }}
                    >
                      <button>Thêm vào giỏ</button>
                    </div>
                    <div className="buy-now">
                      <Link to="/cart">
                        <button>Mua ngay</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <h1>loading</h1>
          )}
        </div>
      </div>
      <div className="container-relative-item">
        <div className="container">
          <h4>sản phẩm có liên quan</h4>
          <div className="row">
            <div className="col-md-4 col-12">
              <Item
                name={relevantitem[0]?.name}
                price={relevantitem[0]?.price}
                image={relevantitem[0]?.image}
                star={relevantitem[0]?.star}
                discount={relevantitem[0]?.discount}
                id={relevantitem[0]?.id}
              />
            </div>
            <div className="col-md-4 col-12">
              <Item
                name={relevantitem[1]?.name}
                price={relevantitem[1]?.price}
                image={relevantitem[1]?.image}
                star={relevantitem[1]?.star}
                discount={relevantitem[1]?.discount}
                id={relevantitem[1]?.id}
              />
            </div>
            <div className="col-md-4 col-12">
              <Item
                name={relevantitem[2]?.name}
                price={relevantitem[2]?.price}
                image={relevantitem[2]?.image}
                star={relevantitem[2]?.star}
                discount={relevantitem[2]?.discount}
                id={relevantitem[2]?.id}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
