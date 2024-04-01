// import About from "./About";

import { useNavigate } from "react-router-dom";

function Appbar() {

  const Navigate = useNavigate()

  const handleScrollToAbout = () => {
    const aboutComponent = document.getElementById("about");
    if (aboutComponent) {
      aboutComponent.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollTSpaker = () => {
    const aboutComponent = document.getElementById("speakerss");
    if (aboutComponent) {
      aboutComponent.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToNewsLetter = () => {
    const aboutComponent = document.getElementById("news");
    if (aboutComponent) {
      aboutComponent.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="py-7 shadow-white shadow-sm   ">
      <div className="flex justify-between mx-10">
        <div className="text-2xl font-bold">Welcome User</div>
        <div className="flex space-x-10 text-lg font-semibold">
          <div
            className="cursor-pointer text-white/50 hover:text-white transition duration-500 ease-in-out"
            onClick={handleScrollToAbout}
          >
            About
          </div>
          <div className="cursor-pointer text-white/50 hover:text-white transition duration-500 ease-in-out"
          onClick={handleScrollTSpaker}>
            Speaker
          </div>
          <div className="cursor-pointer text-white/50 hover:text-white transition duration-500 ease-in-out"
          onClick={handleScrollToNewsLetter}>
            News Letter
          </div>
          <div className="cursor-pointer text-white/50 hover:text-white transition duration-500 ease-in-out">
            Book Online
          </div>
          <div className="cursor-pointer text-white/50 hover:text-white transition duration-500 ease-in-out"
            onClick={()=> Navigate('/signin')}
          >
            Login
          </div>
          <div className="cursor-pointer text-white/50 hover:text-white transition duration-500 ease-in-out"
          onClick={()=> Navigate('/signup')}
          >
            Register now
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
