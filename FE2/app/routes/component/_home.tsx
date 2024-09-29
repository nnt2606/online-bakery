import { Button } from "~/layouts/Button";

export default function Home() {
  
  return (
    <div>
      <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('../public/images/img4.jpeg')] bg-cover bg-no-repeat">
        <div className="w-full lg:w-2/3 space-y-6">
          <h1 className="text-bgcolor font-semibold text-6xl">
            Nghệ thuật làm bánh
          </h1>
          <p className="text-bgcolor font-semibold">
            Với sự đam mê và tận tâm với nghề, chúng tôi luôn đảm bảo rằng mỗi
            chiếc bánh được làm ra đều thể hiện được sự tinh tế và chất lượng.
            Chúng tôi luôn tìm cách để cải thiện và tạo ra những món ăn ngon
            hơn, đẹp hơn và có chất lượng tốt hơn để đáp ứng sự kỳ vọng của
            khách hàng.
          </p>
          <div className="lg:pl-44">
            <Button title="Đặt hàng" />
          </div>
        </div>
      </div>
    </div>
  );
}
