import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import URI from "../config";
import lpg from "../assets/lpg.png";
import ShopForm from "../components/ShopForm";
import CardList from "../components/CardList";

function Shop() {
  const [popup, setPopup] = useState(false);
  const [mi,setmi] = useState(true);
  const Navigate = useNavigate();
  const [data, setData] = useState<any[]>([]);
  const [totalAmount, setTotalAmount] = useState(0); // State variable for total amount

  const handleDelete = async (orderId: any) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${URI}/api/v1/shop/delete`, {
        headers: {
          Authorization: token,
        },
        data: { orderId } // Send orderId in request body
      });
      setmi(!mi);
      // Update the data array after successful deletion
      setData(prevData => prevData.filter(item => item.id !== orderId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  useEffect(() => {
    async function call() {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${URI}/api/v1/user/auth`, {
        headers: {
          Authorization: token,
        },
      });
      console.log(res.data.user);
      if (res.data.user.verified == false) {
        Navigate("/otp-verify");
      }
    }
    call();
  }, []);

  useEffect(() => {
    async function call() {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${URI}/api/v1/shop/fetch`, {
        headers: {
          Authorization: token,
        },
      });
      setData(res.data.data);
      
      // Calculate total amount when data changes
      let total = 0;
      res.data.data.forEach((item: { quantity: number; }) => {
        total += item.quantity * 100; // Assuming $100 is the price per unit
      });
      setTotalAmount(total);
    }
    call();
  }, [popup, mi]);

  return (
    <div className="h-screen text-white w-screen flex overflow-y-hidden">
      <div className="w-2/3">
        <div className="py-10 px-14 overflow-y-scroll h-full">
          {data.map((ta,key) => (
            <CardList
              key={key}
              id={ta.id}
              name={ta.name}
              description={ta.description}
              address={ta.address}
              quantity={ta.quantity}
              onDelete={handleDelete}
            />
          ))}
        </div>
        {popup && <ShopForm pop={popup} sepop={setPopup} />}
        <div
          className="fixed left-10 bottom-14 cursor-pointer bg-blue-700 px-7 py-4 rounded-3xl"
          onClick={() => {
            setPopup(!popup);
          }}
        >
          Add Item to cart
        </div>
      </div>

      <div className="w-1/3 bg-violet-900 mx-10 rounded-2xl my-10 p-10 bg-transparent drop-shadow-xl ">
        <div className="text-3xl font-semibold border-b pb-6">
          Order Summary
        </div>
        <div className="flex py-4 justify-between px-8">
          <div>
            item : <span className="font-semibold">1</span>
          </div>
          <div>
            Total : <span className="font-semibold">${totalAmount}</span>
          </div>
        </div>

        <div className="text-xl my-4 pt-4">Orders :</div>
        <div className=" justify-between flex-col">
          <div className="">
            {data.map((ta,key) => (
              <OrderCard
                key={key}
                name={ta.name}
                product={ta.product}
                quantity={ta.quantity}
              />
            ))}
          </div>
          <div className="absolute bottom-14 flex flex-col">
            <div>
              Total cost - <span className="font-semibold">${totalAmount}</span>
            </div>
            <div className="text-3xl font-semibold border px-5 py-3 rounded-2xl mt-4 cursor-pointer">
              Pay now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderCard({name, product, quantity}: any) {
  const amount = quantity * 100; // Assuming $100 is the price per unit
  return (
    <div className="border p-4 my-5 rounded-2xl bg-white text-black shadow-2xl flex">
      <div>
        <img src={lpg} alt="Product" className="w-52" />
      </div>
      <div>
        <div className="text-xl font-bold">{name}</div>
        <div className="text-xl font-bold">{product}</div>
        <div className="text-xl font-bold">{quantity}</div>
        <div className="text-xl font-bold">{amount}</div>
      </div>
    </div>
  );
}

export default Shop;
