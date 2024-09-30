import { BsStarFill } from "react-icons/bs";
import { Button } from "./Button";
import { useNavigate } from "@remix-run/react";
import Product from "~/interface/Products";

interface Props {
  data: Product;
}

export const DishesCard: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer"
      onClick={() => navigate(`/product/${data.id}`)}
    >
      <img src={data.img} alt="img" className="rounded-xl h-[400px]" />
      <div className="space-y-4">
        <h3 className="font-semibold text-center text-xl pt-6">{data.name}</h3>
        <div className="flex flex-row justify-center">
          <BsStarFill className="text-yellow-400" />
          <BsStarFill className="text-yellow-400" />
          <BsStarFill className="text-yellow-400" />
          <BsStarFill className="text-yellow-400" />
          <BsStarFill className="text-yellow-400" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 align-middle">
          <h3 className="font-semibold text-lg">{data.category}</h3>
          <Button path="/products" title="Buy now" />
        </div>
      </div>
    </div>
  );
};
