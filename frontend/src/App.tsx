import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Shop from "./pages/Shop";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-950 h-max text-white">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
