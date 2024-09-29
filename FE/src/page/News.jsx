import React, { useEffect } from "react";
import "./news.css";
import banhmi5 from "../component/images/banhmi5.jpg";
import banhman3 from "../component/images/banhman3.png";
import banhman4 from "../component/images/banhman4.jpg";
import banhmi1 from "../component/images/banhmi2.jpg";
import banhmi3 from "../component/images/banhmi3.jpg";
import banhmi4 from "../component/images/banhmi4.png";
import banhngot1 from "../component/images/banhngot1.jpg";
import banhngot3 from "../component/images/banhngot3.jpg";
import banhngot4 from "../component/images/banhngot4.jpg";
import Boxnew from "../component/Box-new";

export default function News() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="new_details">
      <h2>Tin tức</h2>
      <div className="container_news_details">
        <div className="subcontainer_news">
          <Boxnew image={banhmi5} />
          <Boxnew image={banhman3} />
          <Boxnew image={banhman4} />
          <Boxnew image={banhmi1} />
          <Boxnew image={banhmi3} />
          <Boxnew image={banhmi4} />
          <Boxnew image={banhngot1} />
          <Boxnew image={banhngot3} />
          <Boxnew image={banhngot4} />
        </div>
      </div>
    </div>
  );
}
