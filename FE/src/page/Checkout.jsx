import React, { useEffect } from "react";
import Centercart from "./Checkoutcomponent/Centercart";

import "./checkout.css";

export default function Checkout() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return <Centercart />;
}
