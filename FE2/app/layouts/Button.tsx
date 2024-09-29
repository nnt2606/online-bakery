import { redirect, useNavigate } from "@remix-run/react"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"

export const Button = (props: any) =>{
    const navigate = useNavigate();


    return (
        <div>
            <button className="px-6 py-1 border-2 border-orange text-orange hover:bg-orange hover:text-white transition-all rounded-xl"
            onClick={() => navigate(props.path)}
            >
                {props.title}
            </button>
        </div>
    )
}