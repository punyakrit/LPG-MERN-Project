import img from "../../public/im.jpg";
import About from "../components/About";

function Home() {
  return (
    <div className="w-screen px-10">
      <div className="my-20  flex items-center">
        <div className="w-1/2 text-9xl font-bold">
          Welcome to LPG Automation System
        </div>
        <div className="w-1/2">
          <img className="rounded-3xl " src={img}></img>
        </div>
      </div>
      <div className="flex flex-col items-center py-10">
        <div className="text-2xl">
        Ensuring the Highest Safety Standards in Industrial Gas Supply 
        </div>
        <div className="mt-7 cursor-pointer">
          <button className="border-2 px-4 py-2 rounded-2xl hover:bg-white hover:text-black transition duration-500 ease-in-out">Register Now</button>
        </div>
      </div>
      <About/>
    </div>
  );
}

export default Home;
