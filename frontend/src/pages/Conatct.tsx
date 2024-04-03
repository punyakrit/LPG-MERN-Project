import axios from "axios";
import { useState } from "react";
import URI from "../config";

function Conatct() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [formSubmitted, setSubmitted] = useState(false);
  function handleSubmit(e: any) {
    e.preventDefault();
    axios.post(`${URI}/api/v1/contact`, {
      name,
      email,
      text,
    });
    setSubmitted(true);
    setName("");
    setEmail("");
    setText("");
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center px-20">
      <div className="w-1/2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa veniam
        dolore modi enim ipsam! Impedit soluta in nesciunt illum odit aliquid
        nam voluptate? Sed quibusdam modi iusto odit maiores magnam expedita
        est, minus qui totam ratione enim repudiandae autem, perspiciatis
        praesentium et ex blanditiis velit.
      </div>
      <div className="w-1/2 text-center px-10">
        <div className="text-4xl ">Enquire about the product</div>
        <div className="text-left my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia hic
          animi consequuntur accusamus assumenda illo nostrum eos, alias itaque
          fugiat quos cupiditate at. Quisquam facilis ea minima, ad temporibus
          molestiae enim animi.
        </div>
        <div>
          <form onSubmit={handleSubmit} className="px-10">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              type="text"
              placeholder="Enter Name"
              className="bg-gray-900 w-full text-xl rounded-xl border-white px-4 py-2 border-2 mt-10"
            ></input>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              value={email}
              type="email"
              placeholder="Enter Email"
              className="bg-gray-900 w-full text-xl rounded-xl border-white px-4 py-2 border-2 my-6"
            ></input>
            <textarea
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter Details ..."
              className="bg-gray-900 w-full text-xl h-40  rounded-xl border-white px-4 py-2 border-2"
            ></textarea>
            <input
              type="submit"
              className="mt-10 text-2xl border-white border-2 px-6 rounded-2xl py-2 cursor-pointer hover:bg-white hover:text-black"
            ></input>
          </form>
        </div>
        {formSubmitted && (
          <div className="text-green font-xl text-green-500 mt-8 absolute px-44">
            Form Submitted successfully
          </div>
        )}
      </div>
    </div>
  );
}

export default Conatct;
