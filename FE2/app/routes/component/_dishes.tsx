import { DishesCard } from "~/layouts/DishesCard";
import img from "../../../public/images/banhkem1.jpg";

export default function Dishes(){
    return(
        <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
            <h1 className="text-4xl font-semibold text-center pt-24 pb-18"
            >Món nổi bật</h1>

            <div className="flex flex-wrap gap-8 justify-center">
                <DishesCard img={img} title="Test" price="120000"/>
                <DishesCard img={img} title="Test" price="120000"/>
                <DishesCard img={img} title="Test" price="120000"/>
                <DishesCard img={img} title="Test" price="120000"/>
                <DishesCard img={img} title="Test" price="120000"/>
                <DishesCard img={img} title="Test" price="120000"/>
            </div>
        </div>
    )
}