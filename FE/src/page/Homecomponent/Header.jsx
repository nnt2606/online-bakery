import React from "react";
import logo from "../../component/images/logo.png";
import background from "../../component/images/red-velvet-cake-dark-background-close-up-side-view-sweet-dessert-holiday.jpg";

export default function header() {
  return (
    <div className="container-fluid header p-0 position-relative">
      <img src={logo} alt="header" className="background" />
      <img src={background} alt="logo" className="logo_header" />
    </div>
  );
}
