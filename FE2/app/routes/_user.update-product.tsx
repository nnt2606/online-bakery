import { useLocation, useSearchParams } from "@remix-run/react";
import { useState } from "react";

export default function UpdateProduct() {
    const[isUpdate, setIsUpdate] = useState(true);



  return (
    <div className="min-h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-5 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-orange">
           Sản phẩm 
          </h2>
        </div>
      </div>
    </div>
  );
}
