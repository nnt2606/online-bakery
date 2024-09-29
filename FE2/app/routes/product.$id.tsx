import ProductDetail from "./component/_productDetail";

export default function DetailProduct() {
  const data = {
    id: "123",
    img: "https://picsum.photos/200",
    name: "picture",
    price: 12000,
    quantity: 2,
    description: "mo ta",
    category: "banh ngot, banh sinh nhat, banh",
    status: "Da duyet",
    sold: 10,
  };

  return (
    <div>
        <ProductDetail data={data}/>
    </div>
  )
}
