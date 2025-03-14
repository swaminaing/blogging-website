import React from "react";
import Navbar from "../Navigation Bar/Navbar";

function Login() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-[90vh] flex justify-center items-center">
        <form
          action=""
          className="w-2/4 flex justify-center flex-col items-center shadow-md shadow-gray-300 rounded-2xl p-7"
        >
          <h1 className="text-2xl font-bold mb-7">Login Form</h1>
          <div className="form-group w-full mb-5">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              className="w-full block border-[#626262] focus:outline-0 border-b mt-3"
            />
          </div>

          <div className="form-group w-full mb-5">
            <label htmlFor="username">Password: </label>
            <input
              type="text"
              className="w-full block border-[#626262] border-b focus:outline-0 mt-3"
            />
          </div>

          <button className="w-full border-1 rounded-2xl py-2 mt-7">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
