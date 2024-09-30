import { DishesCard } from "~/layouts/DishesCard";
import img from "../../../public/images/banhkem1.jpg";
import { getAllProduct } from "~/API/productAPI";
import { useEffect, useState } from "react";
import Product from "~/interface/Products";

export default function Dishes() {
  const [data, setData] = useState<Product[]>([]);

  const fetchData = async () => {
    const response = await getAllProduct();
    if (response.status === 200) {
      setData(response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-18">
        Món nổi bật
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        {data.map((item) => (
          <DishesCard data={item} />
        ))}
      </div>
    </div>
  );
}
