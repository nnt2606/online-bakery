import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Formcake from "./Formcake";
import Formdiscount from "./Formdiscount";
import { useSearchParams } from "react-router-dom";

export default function Menuright() {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClick = () => {
    setSearchParams("")
  };
  return (
    <div className="col-lg-3 position-relative">
      <div className="menu_right position-sticky">
        <div className="filter_icon d-flex align-items-center justify-content-between">
          <div className="header_filter">
            <i className="bi bi-funnel-fill" style={{ color: "red" }} />{" "}
            <span>Bộ lọc</span>
          </div>
          <Button className="btn btn-danger" onClick={handleClick}>
            Bỏ lọc
          </Button>
        </div>
        <Accordion defaultActiveKey={["0", "1"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Loại bánh</Accordion.Header>
            <Accordion.Body id="sort">
              <Formcake />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Khuyến mại</Accordion.Header>
            <Accordion.Body>
              <Formdiscount />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
