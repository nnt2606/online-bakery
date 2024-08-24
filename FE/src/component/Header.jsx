import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import "./header.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Searchresult from "./Searchresult";
import { useSelector } from "react-redux";

const getProduct = async () => {
  const res = await fetch(`https://api-product-g1bk.vercel.app/product`);
  const data = await res.json();
  return data;
};

export default function Header() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState([]);
  const [focus, setFocus] = useState([false]);
  const [searchParams, setSearchParams] = useSearchParams();
  const collapsed = useRef();
  const show = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    getProduct().then(setData);
  }, []);

  const addcart = useSelector((state) => state.addcart);

  const handleKeyDown = (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
      searchParams.set("search", e.target.value);
      navigate(`/menu/1?${searchParams.toString()}`);
      setFocus(false);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    setFocus(true);
  };
  let id = 1;

  const closeNavbar = () => {
    collapsed.current?.classList.add("collapsed");
    collapsed.current?.classList.remove("show");
  };

  useEffect(() => {
    window.addEventListener("click", closeNavbar);
    return () => {
      window.removeEventListener("click", closeNavbar);
    };
  });

  return (
    <div className="navbar_container position-fixed top-0 z-2 d-flex justify-content-center align-items-start">
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" ref={collapsed}>
            <span className="navbar-toggler-icon white" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" ref={collapsed}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  onClick={closeNavbar}
                >
                  Trang chủ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/menu" onClick={closeNavbar}>
                  Thực đơn
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/new" onClick={closeNavbar}>
                  Tin tức
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact"
                  onClick={closeNavbar}
                >
                  Liên hệ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart" onClick={closeNavbar}>
                  Giỏ hàng
                </NavLink>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <form className="d-flex align-items-center position-relative">
        <div className="search position-relative" id="search">
          <input
            className="form-control me-2"
            placeholder="Search"
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={() => setTimeout(() => setFocus(false), 100)}
            onFocus={() => setFocus(true)}
          />
          <div
            className="sreach_result position-absolute text-bg-light"
            style={{ display: focus ? "" : "none" }}
          >
            {data &&
              data.map((data) =>
                data.name.toLowerCase().includes(input) && input.length > 1 ? (
                  <Searchresult
                    image={data.image}
                    name={data.name}
                    price={data.price}
                    star={data.star}
                    discount={data.discount}
                    key={data.id}
                    id={data.id}
                  />
                ) : (
                  ""
                )
              )}
          </div>
        </div>
        <div className="cart">
          <Link to="/cart">
            <i className="bi bi-cart4 m-3" />
          </Link>
          <div className="cart_number">{addcart.item.length}</div>
        </div>
      </form>
    </div>
  );
}
