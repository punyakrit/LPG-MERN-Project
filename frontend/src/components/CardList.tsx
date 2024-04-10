import { useState } from "react";
import { ImCross } from "react-icons/im";
import lpg from "../assets/lpg.png";

function CardList({ id,name, description, address, quantity ,onDelete}: any) {
  const [amount] = useState(quantity * 100);
  const handleDeleteClick = () => {
    // Call the onDelete function passed from the parent component
    onDelete(id);
  };
  return (
    <div className="border p-4 rounded-2xl flex my-8 relative">
      <div className="w-1/3">
        <img src={lpg} alt="LPG" />
      </div>
      <div className="w-2/3">
        <div>
          Name : <span>{name}</span>
        </div>
        <div>
          Description : <span>{description}</span>
        </div>
        <div>
          Address : <span>{address}</span>
        </div>
        <div>
          Quantity : <span>{quantity}</span>
        </div>
        <div>
          Amount : <span>{amount}</span>
        </div>
      </div>
      {/* Delete icon */}
      <div className="absolute top-2 right-2 cursor-pointer" onClick={handleDeleteClick}>
        <ImCross />
      </div>
    </div>
  );
}

export default CardList;
