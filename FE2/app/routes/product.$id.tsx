import { useParams } from "@remix-run/react";
import ProductDetail from "./component/_productDetail";
import { useEffect, useState } from "react";
import { getProductDetail } from "~/API/productAPI";
import Product from "~/interface/Products";

export default function DetailProduct() {
  const { id } = useParams();

  const [data, setData] = useState<Product>();

  const fetchData = async () => {
    const response = await getProductDetail(id);
    if (response.status === 200) {
      setData(response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>; // Handle the loading or undefined case
  }

  return (
    <div>
      <ProductDetail data={data} />
    </div>
  );
}
