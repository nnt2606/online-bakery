import img from "../../../public/images/img1.jpeg";
import { Button } from "~/layouts/Button";

export default function About() {
    return(
        <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
            <img src={img} alt="img" className="w-1/2"/>

            <div className=" space-y-4 lg:pt-14 px-5">
                <h1 className="font-semibold text-4xl text-center md:text-start">CHÚNG TÔI TẠO RA NHỮNG KỶ NIỆM ĐẸP</h1>
                <p>
                Với sự đam mê và tận tâm với nghề, chúng tôi luôn đảm bảo rằng
                mỗi chiếc bánh được làm ra đều thể hiện được sự tinh tế và chất
                lượng. Chúng tôi luôn tìm cách để cải thiện và tạo ra những món
                ăn ngon hơn, đẹp hơn và có chất lượng tốt hơn để đáp ứng sự kỳ
                vọng của khách hàng.
                </p>
                <p>
                ❝ Sáng tạo, kiên trì và chăm chỉ là những yếu tố tạo nên sự
                thành công của người thợ làm bánh ❠
                </p>
                <div className="flex justify-center lg:justify-start">
                    <Button title="Tìm hiểu thêm" />
                </div>
            </div>
        </div>
    )
}