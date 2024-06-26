import { useEffect, useState } from "react";
import axios from "axios";
import URI from "../config";
import { useNavigate } from "react-router-dom";

function VerifyOtp() {
  const Navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);

  useEffect(()=>{
    const interval = setInterval(async()=>{
        const token = localStorage.getItem('token')
        const res = await axios.get(`${URI}/api/v1/user/auth`,{
            headers: {
                Authorization: token,
              },
        })
        if(res.data.user.verified == true){
            Navigate('/shop')
        }
    },1500)

    return () => clearInterval(interval);

  },[])

  const handleChange = (index: any, value: any) => {
    if (isNaN(parseInt(value))) return;
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value !== "" && index < 3) {
      document.getElementById(`otp-input-${index + 1}`)?.focus();
    }

    if (value === "" && index > 0) {
      const previousIndex = index - 1;
      updatedOtp[previousIndex] = "";
      setOtp(updatedOtp);
      document.getElementById(`otp-input-${previousIndex}`)?.focus();
    }
  };

  const handleResend = async() => {
    const token = localStorage.getItem('token')
    await axios.get(`${URI}/api/v1/otp/send-otp`,{
        headers:{
            Authorization: token
        }
    })
    alert("OTP resent");
  };

  const handleVerify = async () => {
    const enteredOtp = parseInt(otp.join(""));
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `${URI}/api/v1/otp/verify-otp`,
        { otp: enteredOtp },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response.data == "Opt Verified Successful");
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <div className="flex justify-center h-screen items-center">
      <div>
        <div>Enter OTP sent in Email</div>
        <div className="flex space-x-2 mt-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault();
                  handleChange(index, "");
                }
              }}
              className="w-12 h-12 border border-gray-300 rounded-lg text-2xl text-center text-black"
            />
          ))}
        </div>
        <div className="mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleVerify}
          >
            Verify
          </button>
          <button
            className="ml-2 text-blue-500 hover:underline"
            onClick={handleResend}
          >
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerifyOtp;
