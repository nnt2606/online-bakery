import React, { useEffect, useState } from "react";
import "./contact.css";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export default function Contact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      phone: "",
      email: "",
      text: "",
    },
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  return (
    <div className="container form">
      <h2>Liên hệ</h2>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="green"
            class="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
            style={{ margin: 10 }}
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
          <h3>Đăng kí thành công</h3>
          <div style={{margin: 5}}>
            Cảm ơn bạn đã đăng kí thông tin bên cửa hàng. Chúng tôi sẽ liên hệ
            với bạn trong thời gian sơm nhất. Mọi thắc mắc xin liên hệ:
            <span className="text-danger"> 03365265959</span>
          </div>
          <button
            type="button"
            className="btn btn-danger"
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </button>
        </Modal.Body>
      </Modal>
      <div className="row">
        <div className="col-lg-5 col-12">
          <form className="contract_form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Họ và tên <span className="text-danger">*</span>
              </label>
              <input
                type="name"
                className="form-control"
                id="name"
                placeholder="NGUYỄN VĂN A"
                {...register("username", {
                  required: {
                    value: true,
                    message: "Vui lòng nhập họ và tên",
                  },
                  minLength: {
                    value: 1,
                    message: "Vui lòng nhập trên 1 kí tự",
                  },
                })}
              />
              <div className="form-message name">
                {errors.username?.message}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Số điện thoại <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                id="phone"
                placeholder="012345678"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Vui lòng nhập số điện thoại",
                  },
                })}
              />
              <div className="form-message phone">{errors.phone?.message}</div>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Địa chỉ Email <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                {...register("email", {
                  required: {
                    value: true,
                    message: "vui lòng nhập mail",
                  },
                  pattern: {
                    value: regexMail,
                    message: "Hãy nhập đúng định dạng của mail",
                  },
                })}
              />
              <div className="form-message email">{errors.email?.message}</div>
            </div>
            <div className="form-group">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Lời nhắn
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={""}
              />
            </div>
            <Button
              className="btn btn-danger mb-4 mb-lg-0 mt-3 button"
              onClick={handleSubmit((ok) => {
                if (ok) {
                  handleShow();
                }
              })}
            >
              Gửi tin
            </Button>
          </form>
        </div>
        <div className="col-lg-6 offset-lg-1 col-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29791.154263129447!2d105.730271!3d21.0369156!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345548f4a0dfef%3A0x5d71a9b35e6fe45a!2zVGnhu4dtIGLDoW5oIHNpbmggbmjhuq10IEtha2EgKEtha2EgQmFrZXJ5KQ!5e0!3m2!1svi!2s!4v1678590389521!5m2!1svi!2s"
            width="100%"
            height={450}
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
