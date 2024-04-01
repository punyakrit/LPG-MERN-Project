// import About from "./About";

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import URI from "../config";

interface UserData {
  username?: string;
}

function Appbar() {
  const [data, setData] = useState<UserData>({});
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    async function call() {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${URI}/api/v1/user/auth`, {
          headers: {
            Authorization: token,
          },
        });
        setData(res.data.user);
        setIsLoggedIn(true);
      } catch {
        setIsLoggedIn(false);
        console.log("error");
      }
    }
    call();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setIsLoggedIn(false); // Set login status to false
    Navigate("/signin"); // Navigate to login page
  };
  const Navigate = useNavigate();

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
        <div className="text-2xl font-bold">{isLoggedIn ? `Welcome ${data.username}` : `Welcome User`} </div>
        <div className="flex space-x-10 text-lg font-semibold">
          <div
            className="cursor-pointer text-white/50 hover:text-white transition duration-500 ease-in-out"
            onClick={handleScrollToAbout}
          >
            About
          </div>
          <div
            className="cursor-pointer text-white/50 hover:text-white transition duration-500 ease-in-out"
            onClick={handleScrollTSpaker}
          >
            Speaker
          </div>
          <div
            className="cursor-pointer text-white/50 hover:text-white transition duration-500 ease-in-out"
            onClick={handleScrollToNewsLetter}
          >
            News Letter
          </div>
          <div
            className="cursor-pointer text-white/50 hover:text-white transition duration-500 ease-in-out"
            onClick={() => Navigate("/shop")}
          >
            Book Online
          </div>
          <div
            className="cursor-pointer text-white/50 hover:text-white transition duration-500 ease-in-out"
            onClick={handleLogout}
          >
            {isLoggedIn ? `Logout` : `Login`}
          </div>

          <div
            className="cursor-pointer text-white/50 hover:text-white transition duration-500 ease-in-out"
            onClick={() => Navigate("/signup")}
          >
            Register now
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
