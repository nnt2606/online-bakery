import { DishesCard } from "~/layouts/DishesCard";
import img from "../../public/images/banhkem1.jpg";
import { useEffect, useState } from "react";
import Product from "~/interface/Products";
import {getAllProduct} from "../API/productAPI";

export default function Products() {
    const[data, setData] = useState<Product[]>([]);

    const fetchData = async() => {
        const response = await getAllProduct();
        if(response.status === 200) {
            setData(response.data);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="min-h-screen pb-10">
            <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
            <div className="flex min-h-full flex-1 flex-col justify-center px-5 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-orange">
                Danh sách sản phẩm
            </h2>
          </div>
        </div>
            <div className="flex flex-wrap gap-8 justify-center">
                {data.map((item) => (
                    <DishesCard data={item}/>
                ))}
            </div>
        </div>
        </div>
    )
}