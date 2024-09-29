import { DishesCard } from "~/layouts/DishesCard";
import img from "../../public/images/banhkem1.jpg";

export default function Products() {
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
                <DishesCard img={img} title="Test" price="120000"/>
                <DishesCard img={img} title="Test" price="120000"/>
                <DishesCard img={img} title="Test" price="120000"/>
                <DishesCard img={img} title="Test" price="120000"/>
                <DishesCard img={img} title="Test" price="120000"/>
                <DishesCard img={img} title="Test" price="120000"/>
            </div>
        </div>
        </div>
    )
}