import OrderInfor from "./component/_orderInfor";

export default function Order() {
    const data = [
        {
          id: "123",
          img: "https://picsum.photos/200",
          name: "picture",
          price: 12000,
          quantity: 2,
        },
      ];
    
      const infor = {
        date: "12h30 29/09/2024",
        address: "dai hoc Bac Ha",
        note: "",
      }

    return(
        <div className="min-h-screen">
            <OrderInfor data={data} infor={infor}/>
        </div>
    )
}

