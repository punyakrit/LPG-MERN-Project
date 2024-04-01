import { useState } from "react";
import sign from "../assets/signup.webp";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import URI from "../config";

function SignUp() {
    const Navigate = useNavigate()

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [password, setPassword] = useState("")
    const [error,setError] = useState("")

    async function handleSubmit(e:any){
        e.preventDefault()
        try{
            const res = await axios.post(`${URI}/api/v1/user/signup`,{
                username: userName,
                email,
                name,
                phoneNo,
                password
            })
            const token = res.data.token
            if(token){
                localStorage.setItem('token', "Bearer "+ token)
                Navigate('/shop');
            }else{
                setError("Token Not found")
            }

        }catch{
            setError("Server error")
        }

    }



  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="hidden lg:block lg:w-1/2 bg-cover bg-center">
        <img src={sign} alt="Login" />
      </div>
      <div className="max-w-md w-full bg-gray-800/70 p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-8 text-center text-white">
          Create an account
        </h2>
        <form onSubmit={handleSubmit} className="text-black">
          <div className="mb-4">
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={(e)=>setUserName(e.target.value)}
              placeholder="User Name"
              className="w-full border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="Name"
              className="w-full border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              placeholder="Email"
              className="w-full border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              placeholder="Password"
              className="w-full border text-black border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="phone"
              value={phoneNo}
              onChange={(e)=> setPhoneNo(e.target.value)}
              placeholder="Phone"
              className="w-full border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>{" "}
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="termsAccepted"
                //   checked={formData.termsAccepted}
                //   onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-white">
                I accept the{" "}
                <Link to="#" className="text-blue-400">
                  terms and conditions
                </Link>
              </span>
            </label>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign up
            </button>
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <div className="text-center">
            <span className="text-gray-400">Already have an account?</span>
            <Link to="/signin" className="text-blue-400 ml-1">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
