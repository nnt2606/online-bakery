import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import bank from "../../component/images/bank_transfer.png";
import mastercard from "../../component/images/master_card.png";
import COD from "../../component/images/COD.png";
import { Link } from "react-router-dom";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";

export default function Centercart() {
  const [data, setData] = useState([]);
  const [datadistrics, setDatadistrics] = useState([]);
  const [datawards, setDatawards] = useState([]);
  const [city, setCity] = useState("");
  const [districts, setDistricts] = useState("");
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const getAdress = async () => {
    const res = await fetch("https://provinces.open-api.vn/api/?depth=3");
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    getAdress().then(setData);
  }, []);

  useEffect(() => {
    if (city !== "") {
      const newdistrics = data.filter((data) => data.code == city);
      setDatadistrics(newdistrics[0]?.districts);
    } else {
      setDistricts("");
      setDatadistrics([]);
      setCity("");
    }
  }, [city]);

  useEffect(() => {
    if (districts !== "") {
      const newwards = datadistrics?.filter((data) => data.code == districts);
      setDatawards(newwards[0]?.wards);
    } else {
      setDatawards([]);
      setDistricts("");
    }
  }, [districts]);

  const handleCity = (e) => {
    if (e.target.id === "city") {
      setCity(e.target.value);
    } else if (e.target.id === "districts") {
      setDistricts(e.target.value);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      phone: "",
      email: "",
      payment: "",
      city: "",
      districts: "",
      wards: "",
    },
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const modal2Close = () => setShow2(false);
  const modal2Show = () => setShow2(true);
  const modal3Close = () => setShow3(false);
  const modal3Show = () => setShow3(true);

  const onsubmit = (value) => {};

  const listCity = data.map((data) => (
    <option value={data.code} key={data.phone_code}>
      {data.name}
    </option>
  ));

  return (
    <div className="container cart">
      <h2>Thanh toán</h2>
      <Modal1 show={show} onHide={handleClose} />
      <Modal2 show={show2} onHide={modal2Close} />
      <Modal3 show={show3} onHide={modal3Close} />
      <div className="row">
        <div className="col-lg-6 col-12">
          <div className="user_info">
            <form onSubmit={handleSubmit(onsubmit)} onChange={handleCity}>
              <h6>Thông Tin Khách hàng</h6>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Họ và tên *"
                  {...register("username", {
                    required: {
                      value: true,
                      message: "Vui lòng nhập tên",
                    },
                    minLength: {
                      value: true,
                      message: "Vui lòng nhập tên có độ dài lớn hơn 1 ký tự",
                    },
                  })}
                />
                <div className="form-message name">
                  {errors.username?.message}
                </div>
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Số điện thoại *"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Vui lòng nhập số điện thoại",
                    },
                    pattern: {
                      value: /(0[3|5|7|8|9])+([0-9]{8,10})\b/g,
                      message: "xin hãy nhập đúng số điện thoại",
                    },
                  })}
                />
                <div className="form-message phone">
                  {errors.phone?.message}
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Vui lòng nhập email",
                    },
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                      message: "Xin hãy nhập đúng định dạng email",
                    },
                  })}
                />
                <div className="form-message email">
                  {errors.email?.message}
                </div>
              </div>
              <div className="adress_customer">
                <select
                  id="city"
                  name="city"
                  className="form-select"
                  {...register("city", {
                    required: {
                      value: true,
                      message: "Vui lòng chọn tỉnh",
                    },
                  })}
                >
                  <option value="" disabled>
                    Chọn tỉnh *
                  </option>
                  {listCity}
                </select>
                <div className="form-message city">{errors.city?.message}</div>
                <div
                  className="chosee-districts"
                  style={{ display: city ? "" : "none" }}
                >
                  <select
                    id="districts"
                    name="districts"
                    className="form-select"
                    {...register("districts", {
                      required: {
                        value: true,
                        message: "Vui lòng chọn huyện",
                      },
                    })}
                  >
                    <option value="" disabled>
                      Chọn huyện *
                    </option>
                    {datadistrics &&
                      datadistrics?.map((data) => (
                        <option value={data.code} key={data.phone_code}>
                          {data.name}
                        </option>
                      ))}
                  </select>
                  <div className="form-message districts">
                    {" "}
                    {errors.districts?.message}
                  </div>
                </div>

                <div
                  className="chosse-wards"
                  style={{ display: districts ? "" : "none" }}
                >
                  <select
                    name="wards"
                    id="wards"
                    className="form-select"
                    {...register("wards", {
                      required: {
                        value: true,
                        message: "Vui lòng chọn xã",
                      },
                    })}
                  >
                    <option value="" disabled>
                      Chọn xã *
                    </option>
                    {datawards &&
                      datawards.map((data) => (
                        <option value={data.code} key={data.phone_code}>
                          {data.name}
                        </option>
                      ))}
                  </select>
                  <div className="form-message wards">
                    {" "}
                    {errors.wards?.message}
                  </div>
                </div>
              </div>
              <textarea
                rows={3}
                placeholder="Ghi chú"
                className="form-control"
                defaultValue={""}
              />
            </form>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <h6>Phương thức thanh toán</h6>{" "}
          <div style={{ color: "red" }}>{errors.payment?.message}</div>
          <div className="form-check-out">
            <div className="container-form" onClick={handleShow}>
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                {...register("payment", {
                  required: {
                    value: true,
                    message: "Vui lòng chọn phương thức thanh toán",
                  },
                })}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Via Bank Transfer
              </label>
            </div>
            <img src={bank} alt="bank_transfer" height="40px" />
          </div>
          <div className="form-check-out" onClick={modal2Show}>
            <div className="container-form">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                {...register("payment", {
                  required: {
                    value: true,
                    message: "Vui lòng chọn phương thức thanh toán",
                  },
                })}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Transfer Money, Visa Card, Master Card
              </label>
            </div>
            <img src={mastercard} alt="bank_transfer" height="40px" />
          </div>
          <div className="form-check-out">
            <div className="container-form">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault5"
                {...register("payment", {
                  required: {
                    value: true,
                    message: "Vui lòng chọn phương thức thanh toán",
                  },
                })}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault5">
                Cash On Delivery(COD)
              </label>
            </div>
            <img src={COD} alt="bank_transfer" height="40px" />
          </div>
          <div className="oder_done">
            <div className="back_button">
              <Link to="/cart">Quay lại giỏ hàng</Link>
            </div>
            <div
              className="btn btn-danger"
              onClick={handleSubmit((d) => {
                if (d) {
                  modal3Show();
                }
              })}
            >
              Thanh toán ngay
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
