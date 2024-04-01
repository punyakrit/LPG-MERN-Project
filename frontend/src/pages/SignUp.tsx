import sign from "../assets/signup.webp";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="hidden lg:block lg:w-1/2 bg-cover bg-center">
        <img src={sign} alt="Login" />
      </div>
      <div className="max-w-md w-full bg-gray-800/70 p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-8 text-center text-white">
          Create an account
        </h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              name="userName"
              // value={formData.name}
              // onChange={handleChange}
              placeholder="User Name"
              className="w-full border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              // value={formData.name}
              // onChange={handleChange}
              placeholder="Name"
              className="w-full border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              // value={formData.email}
              // onChange={handleChange}
              placeholder="Email"
              className="w-full border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              // value={formData.password}
              // onChange={handleChange}
              placeholder="Password"
              className="w-full border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="phone"
              // value={formData.phone}
              // onChange={handleChange}
              placeholder="Phone"
              className="w-full border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>{" "}
          <div className="mb-4">
            {/* Checkbox with styled label */}
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
          {/* {error && <p className="text-red-500 text-sm mb-4">{error}</p>} */}
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
