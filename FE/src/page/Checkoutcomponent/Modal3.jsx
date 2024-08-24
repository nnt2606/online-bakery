import { bottom } from "@popperjs/core";
import React from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

export default function Modal3({ show, onHide }) {
  return (
    <Modal show={show}>
      <Modal.Header closeButton onClick={onHide}></Modal.Header>
      <Modal.Body className="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="green"
          class="bi bi-check-circle-fill"
          viewBox="0 0 16 16"
          style={{ margin: 20 }}
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </svg>
        <h3>Đăng kí mua hàng thành công</h3>
        <p>
          Cảm ơn quý khách đã mua hàng tại{" "}
          <span className="text-danger">Bakery</span>
        </p>
        <p>
          Bộ phận phụ trách sẽ chủ động liên hệ cho anh (chị) trong thời gian
          sớm nhất có thể. Trong trường hợp cần gấp vui lòng gọi Hotline:{" "}
          <span className="text-danger">1900 86 86 68</span>
        </p>
        <Link to="/">
          <button className="btn" variant="secondary" onClick={onHide}>
            Về trang chủ
          </button>
        </Link>
      </Modal.Body>
    </Modal>
  );
}
