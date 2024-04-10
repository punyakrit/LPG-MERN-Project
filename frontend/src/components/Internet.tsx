import { useState, useEffect } from "react";
import axios from "axios";
import URI from "../config";

function Internet() {
  const [backendStatus, setBackendStatus] = useState("checking");
  const [data, setData] = useState("");
  useEffect(() => {
    const interval = setInterval(()=>{
        async function callBackend() {
            try {
              const res = await axios.get(`${URI}/api/v1`);
      
              setData(res.data.message);
              console.log(data);
              setBackendStatus("up");
            } catch (error) {
              console.error("Backend is down:", error);
              setBackendStatus("down");
            }
          }
          callBackend();
    },12000)
    return () => clearInterval(interval);

  }, []);

  return (
    <div
      className={`w-screen h-8 flex justify-center items-center ${
        backendStatus === "up" ? "bg-green-700" : "bg-red-700"
      }`}
    >
      {backendStatus === "up" ? "Backend is Up" : "Backend is Down"}
    </div>
  );
}

export default Internet;
