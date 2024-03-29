import { useState } from "react";
import footerImage from "../assets/footer.jpg";
import axios from 'axios'

function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

    async function handler(){
      const res = await axios.post('http://localhost:3000/api/v1/newsletter/',{
        email
      })
      setEmail("")
    }

  return (
    <footer className="relative" id="news">
      <img
        src={footerImage}
        className="absolute inset-0 h-[370px] w-full object-cover z-0"
        alt="Footer Background"
      />
      <div className="relative z-10 px-10 text-white text-center pt-10">
        <h2 className="text-4xl font-bold">Join Our Mailing List Today</h2>
        <div className="pt-6 flex justify-center">
          <input
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            id="email"
            type="email"
            className="font-semibold h-8 w-64 px-3 bg-transparent border-b-2 border-white"
          />
          <button className="ml-4 text-xl hover:text-black transition duration-500 ease-in-out" onClick={handler}>
            Sign Up
          </button>
        </div>
        <div className="my-16 mx-20 grid grid-cols-3 gap-6">
          <div className="flex flex-col text-start">
            <span className="text-2xl font-bold">LPG Automation</span>
            <span className="py-2">For any Questions Please Email</span>
            <span className="cursor-pointer font-bold">lpgato@gmail.com</span>
          </div>
          <div className="flex flex-col justify-end">
            <a href="https://lpg-mern-project.vercel.app/" target="_blank">
              {" "}
              <span className="cursor-pointer text-gray-300">
                Visit Our Website
              </span>
            </a>
          </div>
          <div className="flex flex-col text-end">
            <span>LOVELY PROFESSIONAL</span>
            <span>UNIVERSITY</span>
            <span>PHAGWARA PUNJAB</span>
            <span>144401</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
