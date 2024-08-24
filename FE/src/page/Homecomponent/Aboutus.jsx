import React from 'react'
import cook from "../../component/images/cooker1.png";
import img1 from "../../component/images/img1.jpeg";
import img2 from "../../component/images/img2.jpeg";
import img3 from "../../component/images/img3.jpeg";
import img4 from "../../component/images/img4.jpeg";


export default function Aboutus() {
  return (
    <div className="container-fluid about_us">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="art_cake text-center">
              <div className="header_art_cake">
                <h2>Nghệ thuật làm bánh</h2>
              </div>
              <div className="subheader_art_cake">
                <h5>CHÚNG TÔI TẠO RA NHỮNG KỶ NIỆM ĐẸP</h5>
              </div>
              <div className="text_art_cake">
                Với sự đam mê và tận tâm với nghề, chúng tôi luôn đảm bảo rằng
                mỗi chiếc bánh được làm ra đều thể hiện được sự tinh tế và chất
                lượng. Chúng tôi luôn tìm cách để cải thiện và tạo ra những món
                ăn ngon hơn, đẹp hơn và có chất lượng tốt hơn để đáp ứng sự kỳ
                vọng của khách hàng.
              </div>
              <div className="chef_cook">Bếp trưởng</div>
              <div className="info_cook d-flex justify-content-center align-items-center">
                <div className="name_cook">Amado</div>
                <div className="box">
                  <img src={cook} alt="img_cooker" className="img_cooker" />
                </div>
                <div className="name_cook">Gabriel</div>
              </div>
              <div className="blockquote_art_cake">
                <div className="blockquote_text">
                  <i>
                    ❝ Sáng tạo, kiên trì và chăm chỉ là những yếu tố tạo nên sự
                    thành công của người thợ làm bánh ❠
                  </i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center">
            <div className="container_img d-flex position-relative">
              <img
                src={img1}
                alt="cake"
                className="box_img"
              />
              <img
                src={img2}
                alt="cake"
                className="box_img"
              />
              <img
                src={img3}
                alt="cake"
                className="box_img"
              />
              <img
                src={img4}
                alt="cake"
                className="box_img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
