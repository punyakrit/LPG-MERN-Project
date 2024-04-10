import { ImCross } from "react-icons/im";

function ShopForm({ pop, sepop }: any) {
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
          ></input>
          <textarea
            className="bg-gray-100 rounded-xl p-2 border border-black text-xl"
            placeholder="Address"
          ></textarea>
          <input
            className="bg-gray-100 rounded-xl p-2 border border-black text-xl"
            placeholder="Description"
          ></input>
          <input
            className="bg-gray-100 rounded-xl p-2 border border-black text-xl"
            placeholder="Phone No"
          ></input>
          <input
            className="bg-gray-100 rounded-xl p-2 border border-black text-xl"
            placeholder="Product"
          ></input>
          <input
            className="bg-gray-100 rounded-xl p-2 border border-black text-xl"
            placeholder="Quantity"
          ></input>
          <div className="text-xl flex justify-center">
            Amount : <span>11</span>
          </div>
          <div className="bg-blue-900 text-white  px-5 py-3 flex justify-center mx-16 rounded-full">Add Item</div>
        </div>
      </div>
    </div>
  );
}

export default ShopForm;
