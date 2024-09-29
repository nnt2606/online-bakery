import { BsStarFill } from "react-icons/bs"
import { Button } from "./Button"

export const DishesCard = (props: any) => {
    return (
        <div className="w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
            <img src={props.img} alt="img" className="rounded-xl" />
            <div className="space-y-4">
                <h3 className="font-semibold text-center text-xl pt-6">{props.title}</h3>
                <div className="flex flex-row justify-center">
                    <BsStarFill className="text-orange"/>
                    <BsStarFill className="text-orange"/>
                    <BsStarFill className="text-orange"/>
                    <BsStarFill className="text-orange"/>
                    <BsStarFill className="text-orange"/>
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    <h3 className="font-semibold text-lg">{props.price}</h3>
                    <Button path='/products' title="Buy now"/>
            </div>
            </div>
        </div>
    )
}