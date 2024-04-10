import axios from "axios";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import URI from "../config";

function ShopForm({ pop, sepop }: any) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const token = localStorage.getItem("token");
  const amount = 100;
  return (
    <div className="fixed inset-0  backdrop-blur-md z-10 flex items-center justify-center">
      <div className="bg-white w-1/3 h-max mt-56 mb-56   px-5 py-6 text-black">
        <div className="flex  justify-between w-full">
          <div className="text-xl font-bold">Enter Product Details</div>
          <div
            className="mt-2 cursor-pointer "
            onClick={() => {
              sepop(!pop);
            }}
          >
            <ImCross />
          </div>
        </div>

        <div className="flex flex-col px-16 mt-14 space-y-3">
          <input
            className="bg-gray-100 rounded-xl p-2 border border-black text-xl"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <textarea
            className="bg-gray-100 rounded-xl p-2 border border-black text-xl"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
          <input
            className="bg-gray-100 rounded-xl p-2 border border-black text-xl"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          ></input>
          <input
            className="bg-gray-100 rounded-xl p-2 border border-black text-xl"
            placeholder="Phone No"
            onChange={(e) => setPhoneno(e.target.value)}
          ></input>
          <input
            className="bg-gray-100 rounded-xl p-2 border border-black text-xl"
            placeholder="Product"
            onChange={(e) => setProduct(e.target.value)}
          ></input>
          <input
            className="bg-gray-100 rounded-xl p-2 border border-black text-xl"
            placeholder="Quantity"
            onChange={(e) => setQuantity(e.target.value)}
          ></input>
          <div className="text-xl flex justify-center">
            Amount : <span>{amount}</span>
          </div>
          <div
            className="bg-blue-900 text-white  px-5 py-3 flex justify-center mx-16 rounded-full"
            onClick={async () => {
              try {
                const res = await axios.post(
                  `${URI}/api/v1/shop/create-prod`,
                  {
                    name:name,
                    address:address,
                    description:description,
                    phoneno:phoneno,
                    product:product,
                    quantity:quantity,
                    amount:amount,
                  },
                  {
                    headers: {
                      Authorization: token, // Assuming token is defined
                    },
                  }
                );
                  console.log(res.data)
                sepop(!pop);
              } catch (e) {
                console.log(e);
              }
            }}
          >
            Add Item
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopForm;
