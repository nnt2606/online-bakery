import React, { useEffect } from "react";
import "./newdetails.css";
import newdetail from "../component/images/new_details.jpg";
import newdetails2 from "../component/images/new_details2.jpg";
import newdetails3 from "../component/images/new_details3.jpg";
import banhman2 from "../component/images/banhman2.jpg";
import banhngot1 from "../component/images/banhngot1.jpg";
import banhngot5 from "../component/images/banhngot5.jpg";
import banhman3 from "../component/images/banhman3.png";

export default function Newdetails() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="container-fluid new_details">
      <div className="row">
        <div className="col-lg-6 offset-lg-2 col-12">
          <h2>Red velvet - món bánh thể hiện tình yêu</h2>
          <p>
            Mọi người thường tặng nhau red velvet để thể hiện tình yêu do chúng
            có màu đỏ và được làm thành hình trái tim.
          </p>
          <p>
            Từ khi xuất hiện, red velvet (bánh nhung đỏ) được người mê bánh ngọt
            khắp nơi trên thế giới yêu thích nhờ hương vị cổ điển và màu đỏ bắt
            mắt. Tên gọi của chúng cũng khá sang trọng, như một phiên bản mềm,
            bông và đắt tiền của những chiếc bánh thông thường. Nhiều người nghĩ
            rằng chúng đơn giản chỉ là một chiếc bánh chocolate có thêm màu đỏ
            thực phẩm. Tuy nhiên, có một vài điều khiến chúng trở nên khác biệt
            và được mệnh danh là loại bánh lãng mạn nhất thế giới.
          </p>
          <img src={newdetail} alt="red velvet" />
          <figcaption>
            Bánh red velvet có màu đỏ của sự lãng mạn và nồng nhiệt. Ảnh: Fun
            Cakes
          </figcaption>
          <p>
            Red velvet xuất hiện lần đầu vào thời Victoria tại Anh. Những năm
            1800, các nghệ nhân chuộng sử dụng bột cacao để làm các loại bánh
            sang trọng. Họ gọi những chiếc bánh này là bánh "velvet" (nghĩa là
            nhung) và phục vụ chúng trong những bữa tiệc xa hoa của giới quý
            tộc. Từ "nhung" để thực khách có thể nhận diện được kết cấu của
            bánh: mịn, mềm như nhung.
          </p>
          <p>
            Thành phần của red velvet như các loại bánh ngọt điển hình, bao gồm
            bột mì, đường, bơ và trứng, tuy nhiên có thêm bột cacao, sữa bơ và
            giấm. Khi kết hợp với nhau, các thành phần này sẽ tạo ra màu hơi đỏ
            do bột cacao phản ứng với axit. Tuy nhiên, để có được màu đỏ tươi
            rực rỡ, nghệ nhân sau này phải bổ sung thêm màu thực phẩm. Trước
            những năm 1920, những chiếc red velvet được bán ra có màu tối hơn so
            với màu đỏ mà ta thường thấy hiện tại. Sau đó, công ty tạo màu thực
            phẩm Adams Extract muốn bán nhiều màu thực phẩm hơn nên đã tạo ra
            loại màu đỏ tươi, sử dụng cho bánh red velvet cho đến bây giờ.
          </p>
          <img src={newdetails2} alt="red velvet" />
          <figcaption>
            Bánh red velvet ban đầu không có màu đỏ tươi như hiện tại. Ảnh:
            Rikki Snyder/The New York Times
          </figcaption>
          <p>
            Có nhiều lý do khiến red velvet được mệnh danh là loại bánh lãng mạn
            nhất thế giới và thường được các cặp tình nhân tặng cho nhau. Màu đỏ
            tượng trưng cho tình yêu, sự lãng mạn và nồng nhiệt. Do có màu này,
            red velvet được nhiều cặp đôi tặng cho nhau như một cách thể hiện
            tình cảm.
          </p>
          <p>
            Hương vị của bánh dễ chịu với phần đông thực khách, dễ gây cảm tình
            và dễ tặng. Thành phần gồm sữa bơ và giấm giúp bánh có kết cấu mềm,
            nhẹ và bông xốp. Bánh nhung đỏ cũng thường được kết hợp với kem
            phomai phủ trắng bên trên. Sự tương phản giúp làm nổi bật màu đỏ,
            trong khi độ ngậy của kem làm bùng tỏa hương vị của sữa bơ. Phần cốt
            bánh không ngọt, lớp phủ vani ở trên làm tăng sự bồng bềnh cho món
            bánh.
          </p>
          <img src={newdetails3} alt="red velvet" />
          <figcaption>
            Bánh red velvet thường được làm thành hình trái tim do có màu sắc
            phù hợp. Ảnh: Youtube Salma's Kitchen
          </figcaption>
          <p>
            Red velvet hay được làm với khuôn trái tim do chúng có màu sắc phù
            hợp nhất để làm với khuôn này. Vì lý do đó, các đôi tình nhân thường
            tặng nhau red velvet vào những dịp lãng mạn như ngày kỷ niệm hoặc Lễ
            Tình nhân. Nếu bạn đang tìm kiếm một chiếc bánh kem vừa lãng mạn vừa
            thơm ngon, không chỉ thể hiện cảm xúc mà còn kích thích vị giác của
            người thân yêu thì một chiếc red velvet là lựa chọn hoàn hảo.
          </p>
        </div>
        <div className="col-lg-3 d-none d-lg-block position-relative">
          <div className="box_newest_news position-sticky">
            <h5>Xem nhiều</h5>
            <a href="#">
              <div className="box_new_details">
                <div className="new_details_img">
                  <img src={banhman3} alt="banhkem2" />
                </div>
                <div className="box_new_details_text">
                  <h6>Món bánh được mệnh danh là 'Viagra của thế kỷ'</h6>
                  <p>
                    Tiramisu là loại bánh có nguồn gốc gây tranh cãi, có tên gọi
                    nghĩa là "Hãy làm tôi vui đi".
                  </p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="box_new_details">
                <div className="new_details_img">
                  <img src={banhngot5} alt="banhkem2" />
                </div>
                <div className="box_new_details_text">
                  <h6>Mẹ trẻ có nên mở tiệm trà sữa và bánh ngọt?</h6>
                  <p>
                    Người mẹ trẻ mở cửa hàng trà sữa và bánh ngọt gần nhà vừa
                    phụ giúp kinh tế gia đình
                  </p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="box_new_details">
                <div className="new_details_img">
                  <img src={banhman2} alt="banhkem2" />
                </div>
                <div className="box_new_details_text">
                  <h6>Những món bánh ngọt nổi tiếng thế giới</h6>
                  <p>
                    Con tôi 7 tuổi mỗi ngày ăn hết 5 hũ nhỏ bánh flan. Xin bác
                    sĩ tư vấn cách ăn sao cho tốt với sức khỏe và không béo phì?
                  </p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="box_new_details">
                <div className="new_details_img">
                  <img src={banhngot1} alt="banhkem2" />
                </div>
                <div className="box_new_details_text">
                  <h6>Những món mới hút khách trong Covid-19 ở Việt Nam</h6>
                  <p>
                    Trong danh sách 100 loại bánh ngọt nổi tiếng thế giới, bánh
                    da lợn của Việt Nam nằm ở vị trí 96.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
