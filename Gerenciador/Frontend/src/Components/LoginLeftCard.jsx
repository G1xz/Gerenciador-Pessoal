import React, { useState } from "react";
import LoginTitle from "./LoginTitle";
import { IoLogIn, IoMail, IoLockClosed } from "react-icons/io5"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  return (
    <div className="bg-white h-[100%] w-[50%]">
      <div className="mt-20">
        <LoginTitle />
        <div className="mt-20">
          <div className="flex flex-col justify-center items-center gap-6 mt-20 m-7">
            <div className="relative">
              <IoMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <input
                className="pl-10 pr-3 rounded-lg h-[35px] w-[300px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <IoLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <input
                className="pl-10 pr-3 rounded-lg h-[35px] w-[300px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="bg-blue-500 flex items-center justify-center gap-2 rounded-lg h-[35px] w-[200px] text-white font-montserrat hover:scale-105 hover:bg-blue-700 hover:shadow-cyanShadow transition duration-300"
            >
              Login <IoLogIn size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
