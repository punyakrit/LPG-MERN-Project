import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import URI from "../config";
import lpg from "../assets/lpg.png";
import ShopForm from "../components/ShopForm";

function Shop() {
  const [popup, setPopup] = useState(false);
  const Navigate = useNavigate();

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

  return (
    <div className="h-screen text-white w-screen flex overflow-y-hidden">
      <div className="w-2/3">
        {popup && <ShopForm pop = {popup} sepop ={setPopup}/>}
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
          <div className="">
            item : <span className="font-semibold">1</span>
          </div>
          <div>
            Total : <span className="font-semibold">$100</span>
          </div>
        </div>

        <div className="text-xl my-4 pt-4">Orders :</div>
        <div className=" justify-between flex-col">
          <div className="">
            <OrderCard />
          </div>
          <div className="absolute bottom-14 flex flex-col">
            <div>
              Total cost - <span className="font-semibold">$100</span>
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

function OrderCard() {
  return (
    <div className="border p-4 my-5 rounded-2xl bg-white text-black shadow-2xl flex">
      <div className=" ">
        <img src={lpg} className="w-52"></img>
      </div>
      <div className="">
        <div className="text-xl font-bold">Name</div>
        <div className="text-xl font-bold">Product</div>
        <div className="text-xl font-bold">Quantity</div>
        <div className="text-xl font-bold">Amount</div>
      </div>
    </div>
  );
}

export default Shop;
