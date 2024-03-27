// import About from "./About";

function Appbar() {
  return (
    <div className="py-7 shadow-white shadow-sm  w-screen ">
      <div className="flex justify-between mx-10">
        <div className="text-2xl font-bold">Welcome User</div>
        <div className="flex space-x-10 text-lg font-semibold">
          <div className="cursor-pointer text-white/50 hover:text-white transition duration-500 ease-in-out"
          // onClick={<About/>}
          >
            About
          </div>
          <div className="cursor-pointer text-white/50 hover:text-white transition duration-500 ease-in-out">
            Speaker
          </div>
          <div className="cursor-pointer text-white/50 hover:text-white transition duration-500 ease-in-out">
            Topics
          </div>
          <div className="cursor-pointer text-white/50 hover:text-white transition duration-500 ease-in-out">
            Book Online
          </div>
          <div className="cursor-pointer text-white/50 hover:text-white transition duration-500 ease-in-out">
            Login
          </div>
          <div className="cursor-pointer text-white/50 hover:text-white transition duration-500 ease-in-out">
            Register now
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
