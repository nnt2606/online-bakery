import React from 'react'
import blog1 from "../../component/images/blog-1.jpg";
import blog2 from "../../component/images/blog-2.jpg";

import blog3 from "../../component/images/blog-3.jpg";
import blog4 from "../../component/images/blog-4.jpg";

import { Link } from 'react-router-dom';

export default function Homenew() {
  return (
    <div className="container-fluid news">
      <div className="news_header">
        <h2>Tin tức mới nhất</h2>
      </div>
      <div className="container news">
        <div className="box_news">
          <div className="img_news">
            <img src={blog1} alt="image_blog" />
          </div>
          <div className="info_news">
            <div className="title_news">
              <h5>Cách giữ bánh Gato ngon và lâu hơn</h5>
            </div>
            <div className="time_news">
              <i className="bi bi-person" />
              <span>Admin</span>
              <i className="bi bi-calendar" />
              <span>20/2/2023</span>
            </div>
            <div className="text_news">
              Cách bảo quản bánh Gato như thế nào? Bánh kem sinh nhật bảo quản
              được bao lâu là câu hỏi của nhiều người. Tưởng chừng một vấn đề
              không mấy khó khăn này nhưng nếu không biết cách thì không hề dễ
              dàng đâu nhé
            </div>
            <div className="more_details">
              <button>
                <Link to="/new/newdetails">Xem thêm</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="box_news">
          <div className="img_news">
            <img src={blog2} alt="image_blog" />
          </div>
          <div className="info_news">
            <div className="title_news">
              <h5>Cách giữ bánh Gato ngon và lâu hơn</h5>
            </div>
            <div className="time_news">
              <i className="bi bi-person" />
              <span>Admin</span>
              <i className="bi bi-calendar" />
              <span>20/2/2023</span>
            </div>
            <div className="text_news">
              Cách bảo quản bánh Gato như thế nào? Bánh kem sinh nhật bảo quản
              được bao lâu là câu hỏi của nhiều người. Tưởng chừng một vấn đề
              không mấy khó khăn này nhưng nếu không biết cách thì không hề dễ
              dàng đâu nhé
            </div>
            <div className="more_details">
              <button>
                <Link to="/new/newdetails">Xem thêm</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="box_news">
          <div className="img_news">
            <img src={blog3} alt="image_blog" />
          </div>
          <div className="info_news">
            <div className="title_news">
              <h5>Cách giữ bánh Gato ngon và lâu hơn</h5>
            </div>
            <div className="time_news">
              <i className="bi bi-person" />
              <span>Admin</span>
              <i className="bi bi-calendar" />
              <span>20/2/2023</span>
            </div>
            <div className="text_news">
              Cách bảo quản bánh Gato như thế nào? Bánh kem sinh nhật bảo quản
              được bao lâu là câu hỏi của nhiều người. Tưởng chừng một vấn đề
              không mấy khó khăn này nhưng nếu không biết cách thì không hề dễ
              dàng đâu nhé
            </div>
            <div className="more_details">
              <button>
                <Link to="/new/newdetails">Xem thêm</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="box_news">
          <div className="img_news">
            <img src={blog4} alt="image_blog" />
          </div>
          <div className="info_news">
            <div className="title_news">
              <h5>Cách giữ bánh Gato ngon và lâu hơn</h5>
            </div>
            <div className="time_news">
              <i className="bi bi-person" />
              <span>Admin</span>
              <i className="bi bi-calendar" />
              <span>20/2/2023</span>
            </div>
            <div className="text_news">
              Cách bảo quản bánh Gato như thế nào? Bánh kem sinh nhật bảo quản
              được bao lâu là câu hỏi của nhiều người. Tưởng chừng một vấn đề
              không mấy khó khăn này nhưng nếu không biết cách thì không hề dễ
              dàng đâu nhé
            </div>
            <div className="more_details">
              <button>
                <Link to="/new/newdetails">Xem thêm</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
