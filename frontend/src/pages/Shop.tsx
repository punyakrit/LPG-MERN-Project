import axios from "axios";
import { useEffect,  } from "react";
import { useNavigate } from "react-router-dom";
import URI from "../config";

function Shop() {
  const Navigate = useNavigate();

  useEffect(() => {
    async function call() {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${URI}/api/v1/user/auth`, {
        headers: {
          Authorization: token,
        },
      });
      // if(!token){
      //   Navigate('/')
      // }
      console.log(res.data.user);
      if(res.data.user.verified == false){
        Navigate('/otp-verify')
      }
    }
    call();
  }, []);

  
  return(  <div>Shopping page</div>);
}

export default Shop;
