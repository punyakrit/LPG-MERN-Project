import { Link, useNavigate } from "react-router-dom";
import img from "../assets/login.svg";
import { useState } from "react";
import axios from "axios";
import URI from "../config";

function Signin() {
    const [email ,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("");

    const Navigate = useNavigate()

    const handleSubmit = async (e:any)=>{
        e.preventDefault()
    
        try {
            const response = await axios.post(`${URI}/api/v1/user/signin`, {
                email,
                password
            });
    
            const token = response.data.token;
    
            if (token) {
                localStorage.setItem('token', "Bearer "+ token);
                Navigate('/shop');
            } else {
                setError("Authentication failed");
            }
    
        } catch(error) {
            setError("Server crashed");
        }
    }
    

  return (
    <div className="h-screen px-10 flex justify-center items-center">
      <div className="w-1/2 flex justify-center">
        <img src={img} alt="Login"></img>
      </div>
      <div className="w-1/2 ml-14">
        <div className="px-10 bg-gray-800 bg-opacity-70 rounded-2xl py-10">
          <h2 className="text-3xl font-bold font-sans text-white">
            Sign in to your account
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 mt-8">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:border-blue-500 text-black"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:border-blue-500 text-black"
                required
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" id="rememberMe" />
                <label htmlFor="rememberMe" className="text-gray-400">
                  Remember me
                </label>
              </div>
            </div>
            <div className="flex items-center justify-center mb-6">
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign in
              </button>
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <div className="text-center text-sm">
              <span className="text-gray-400">Don't have an account?</span>
              <Link to="/signup" className="text-blue-400 ml-1">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
