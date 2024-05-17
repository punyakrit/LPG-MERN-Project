import axios from "axios";
import { useState } from "react";
import URI from "../config";

function Contact() {
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
        <h2>About Our Product</h2>
        <p>
          Our product is designed to revolutionize the way you interact with
          technology. With cutting-edge features and user-friendly design, we
          aim to provide an unparalleled experience. Whether you're a tech
          enthusiast or a casual user, our product caters to all your needs with
          ease and efficiency.
        </p>
        <p>
          We believe in innovation and quality. Our team is dedicated to
          continuous improvement and ensuring that our product remains ahead of
          the curve. Join us on this exciting journey and discover how our
          product can make your life simpler and more enjoyable.
        </p>
      </div>
      <div className="w-1/2 text-center px-10">
        <div className="text-4xl">Enquire about the Product</div>
        <div className="text-left my-6">
          <p>
            Have questions about our product? Want to know more about its
            features, pricing, or availability? Fill out the form below, and
            our team will get back to you as soon as possible. We're here to
            help you make the most informed decision.
          </p>
          <p>
            Your feedback and inquiries are important to us. Feel free to reach
            out, and we'll ensure that all your questions are answered.
          </p>
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
              className="bg-gray-900 w-full text-xl h-40 rounded-xl border-white px-4 py-2 border-2"
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

export default Contact;
