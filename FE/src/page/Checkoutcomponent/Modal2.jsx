import React, { useState } from "react";
import chip from "../../component/images/chip.png";
import visa from "../../component/images/visa.png";
import map from "../../component/images/map.png";
import pattern from "../../component/images/pattern.png";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

export default function Modal2({ show, onHide }) {
  const [isFocus, setIsfocus] = useState(false);
  const [form, setForm] = useState({
    numbers: "",
    names: "",
    dates: "",
    sercuritys: "",
  });

  function patternMatch({ input, template }) {
    try {
      let j = 0;
      let plaintext = "";
      let countj = 0;
      while (j < template.length) {
        if (countj > input.length - 1) {
          template = template.substring(0, j);
          break;
        }

        if (template[j] == input[j]) {
          j++;
          countj++;
          continue;
        }

        if (template[j] == "x") {
          template =
            template.substring(0, j) +
            input[countj] +
            template.substring(j + 1);
          plaintext = plaintext + input[countj];
          countj++;
        }
        j++;
      }

      return template;
    } catch {
      return "";
    }
  }

  const {
    register,
    handleSubmit,
    onChange,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      numbers: "",
      names: "",
      dates: "",
      sercuritys: "",
    },
  });
  const handleRotate = () => {
    setIsfocus(true);
  };

  const handleAgain = () => {
    setIsfocus(false);
  };

  return (
    <Modal
      className="modal fade bank"
      id="exampleModal1"
      tabIndex={-1}
      show={show}
    >
      <Modal.Header className="modal-header">
        <Modal.Title className="modal-title fs-5" id="exampleModalLabel">
          Transfer Money, Visa Card, Master Card
        </Modal.Title>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={onHide}
        />
      </Modal.Header>
      <Modal.Body className="modal-body">
        <div className="card_visa d-none d-md-block">
          <div className={isFocus ? "card_inner rotate" : "card_inner"}>
            <div className="front_visa">
              <div className="header_visa_front">
                <img src={chip} alt="chip" width="60px" className="chip_img" />
                <img src={visa} alt="visa" width="60px" className="visa_img" />
              </div>
              <div className="number_visa">{form.numbers}</div>
              <div className="footer_visa_front">
                <div className="card_name">
                  <div>CARD HOLDER</div>
                  <div className="name_change">{form.names}</div>
                </div>
                <div className="card_valid">
                  <div>VALID TILL</div>
                  <div className="time_change">{form.dates}</div>
                </div>
              </div>
              <div className="background">
                <img src={map} alt="map" height="290px" width="470px" />
              </div>
            </div>
            <div className="back_visa">
              <div className="header_back_visa" />
              <div className="secret_number">
                <img src={pattern} alt="pattern" height="50px" width="400px" />
                <div className="visa_secret_number">
                  <p>{form.sercuritys}</p>
                </div>
              </div>
              <div className="article_back_visa">
                this is information of visa
              </div>
              <div className="footer_back_visa">
                <div className="signature">customer signature</div>
                <img src={visa} width="80px" alt="visa" />
              </div>
              <div className="background">
                <img src={map} alt="map" height="290px" width="470px" />
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="number-visa"
            maxLength={19}
            placeholder="Số thẻ tín dụng/ghi nợ"
            onFocus={handleAgain}
            value={form.numbers}
            {...register("numbers", {
              required: {
                value: true,
                message: "Vui lòng nhập số thẻ",
              },
              onChange: (e) => {
                let pattern = /^[0-9]+$/;
                if (
                  pattern.test(e.nativeEvent.data) ||
                  e.nativeEvent.data == null
                ) {
                  setForm((prev) => ({
                    ...prev,
                    numbers: patternMatch({
                      input: e.target.value,
                      template: "xxxx xxxx xxxx xxxx",
                    }),
                  }));
                }
              },
            })}
          />
          <div className="form-message number-visa">
            {errors.numbers?.message}
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="name_visa"
            placeholder="Họ và tên chủ thẻ"
            onFocus={handleAgain}
            value={form.names}
            {...register("names", {
              required: {
                value: true,
                message: "Vui lòng nhập họ tên",
              },
              onChange: (e) => {
                let pattern = /^[A-Za-z]+$/i;
                if (
                  pattern.test(e.nativeEvent.data) ||
                  e.nativeEvent.data == " "
                ) {
                  setForm((prev) => ({
                    ...prev,
                    names: e.target.value.toUpperCase(),
                  }));
                }
              },
            })}
          />
          <div className="form-message name_visa">{errors.names?.message}</div>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="expiry"
            placeholder="Ngày hết hạn"
            onFocus={handleAgain}
            maxLength={5}
            value={form.dates}
            {...register("dates", {
              required: {
                value: true,
                message: "Vui lòng nhập ngày hết hạn",
              },
              onChange: (e) => {
                let pattern = /^[0-9]+$/i;
                if (
                  pattern.test(e.nativeEvent.data) ||
                  e.nativeEvent.data == null
                ) {
                  setForm((prev) => ({
                    ...prev,
                    dates: patternMatch({
                      input: e.target.value,
                      template: "xx/xx",
                    }),
                  }));
                }
              },
            })}
          />
          <div className="form-message expiry">{errors.dates?.message}</div>
        </div>
        <div className="form-group">
          <input
            type="text"
            id="security"
            name="security"
            className="form-control"
            placeholder="Mã bảo mật VD:123"
            maxLength={3}
            value={form.sercuritys}
            onFocus={handleRotate}
            {...register("sercuritys", {
              required: {
                value: true,
                message: "Vui lòng nhập mã bảo mật",
              },
              minLength: {
                value: 3,
                message: "Vui lòng nhập đủ 3 kí tự",
              },
              onChange: (e) => {
                let pattern = /^[0-9]+$/i;
                if (
                  pattern.test(e.nativeEvent.data) ||
                  e.nativeEvent.data == null
                ) {
                  setForm((prev) => ({
                    ...prev,
                    sercuritys: e.target.value,
                  }));
                }
              },
            })}
          />
          <div className="form-message security">
            {errors.sercuritys?.message}
          </div>
        </div>
        <div className="rule_visa">
          Chúng tôi hợp tác với CyberSouce, công ty thuộc tổ chức thẻ VISA, nhằm
          đảm bảo thông tin thẻ Tín dụng/Ghi nợ của bạn luôn được bảo mật và an
          toàn. OBO Stadium không có quyền truy cập vào bất cứ thông tin nào.
        </div>
        <div className="button_visa">
          <a data-bs-dismiss="modal" aria-label="Close" onClick={onHide}>
            Hủy bỏ
          </a>
          <button
            className="btn btn-danger"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={handleSubmit((d) => {
              if (d) {
                onHide();
              }
            })}
          >
            Lưu
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
