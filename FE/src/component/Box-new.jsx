import React from 'react'
import { Link } from 'react-router-dom'


export default function Boxnew({image}) {
  return (
    <div className="box_new">
      <Link className="img_new" to="/new/newdetails">
        <img src={image} alt="image_blog" />
      </Link>
      <div className="info_new">
        <Link className="title_news" to="/new/newdetails">
          <h3>Cách giữ bánh Gato ngon và lâu hơn</h3>
        </Link>
        <a className="time_news" href="/new/newdetails">
          <i className="bi bi-person" />
          <span>Admin</span>
          <i className="bi bi-calendar" />
          <span>20/2/2023</span>
          <i className="bi bi-eye" />
          <span>2.456</span>
        </a>
        <Link className="text_new" to="/new/newdetails">
          Cách bảo quản bánh Gato như thế nào? Bánh kem sinh nhật bảo quản được
          bao lâu là câu hỏi của nhiều người. Tưởng chừng một vấn đề không mấy
          khó khăn này nhưng nếu không biết cách thì không hề dễ dàng đâu nhé
        </Link>
      </div>
    </div>
  );
}
