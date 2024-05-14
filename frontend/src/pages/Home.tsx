import { useEffect } from "react";
import img from "../assets/im.jpg";
import About from "../components/About";
import Appbar from "../components/Appbar";
import Experts from "../components/Experts";
import Footer from "../components/Footer";
import axios from "axios";
import URI from "../config";
import Internet from "../components/Internet";

function Home() {
  
    useEffect(()=>{
      const interval = setInterval(()=>{
        axios.get(`${URI}/api/v1/`)
      },3000)
      
      return () => clearInterval(interval)
    },[])
  
  
  
  return (
    <div className=" ">
      <Internet/>
      <Appbar/>
      <div className="my-20 px-10 flex items-center">
        <div className="w-1/2 text-9xl font-bold">
          Welcome to LPG Automation System
        </div>
        <div className="w-1/2 pl-10">
          <img className="rounded-3xl " src={img}></img>
        </div>
      </div>
      <div className="flex flex-col items-center py-10 px-10">
        <div className="text-2xl">
        Ensuring the Highest Safety Standards in Industrial Gas Supply 
        </div>
        <div className="mt-7 cursor-pointer">
          <button className="border-2 px-4 py-2 rounded-2xl hover:bg-white hover:text-black transition duration-500 ease-in-out">Register Now</button>
        </div>
      </div>
      <About/>
      <Experts/>
      <Footer/>
    </div>
  );
}

export default Home;
