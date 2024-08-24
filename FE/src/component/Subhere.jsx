import React from "react";
import "./Subhere.css"

export default function Subhere() {
  return (
    <div className="container-fluid subscribe text-center">
      <div className="box_sub">
        <h3>ĐĂNG KÍ NHẬN THÔNG BÁO</h3>
        <b>Đăng kí nhận thông tin khuyến mãi</b>
      </div>
      <div className="row">
        <div className="col-lg-8 col-12">
          <div className="email-box">
            <input type="text" placeholder="Nhập địa chỉ Email của bạn" />
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="subscribe">
            <button type="button" className="button">
              Đăng kí
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
