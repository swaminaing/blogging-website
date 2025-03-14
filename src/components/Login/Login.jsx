import React from "react";
import Navbar from "../Navigation Bar/Navbar";
// import "../Login/Login.css";

const styles = {
  container: "w-full h-[90vh] flex justify-center items-center",
  form: "w-2/4 flex justify-center flex-col items-center shadow-md shadow-gray-300 rounded-2xl p-7",
  formGroup: "w-full mb-5 relative group",
  formLabel: "text-[#626262] font-medium transition-colors duration-300",
  formInput:
    "w-full block border-[#626262] border-b mt-3 focus:outline-none focus:ring-0",
  formButton:
    "w-full border-1 rounded-2xl py-2 mt-7 bg-amber-600 text-white hover:bg-amber-700 cursor-pointer transition-all",
};

function Login() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <form className={styles.form}>
          <h1 className="text-2xl font-bold mb-7">Login Form</h1>

          <div className={styles.formGroup}>
            <label
              htmlFor="username"
              className={`${styles.formLabel} group-focus-within:text-amber-700`}
            >
              Username:
            </label>
            <input type="text" id="username" className={styles.formInput} />
          </div>

          <div className={styles.formGroup}>
            <label
              htmlFor="password"
              className={`${styles.formLabel} group-focus-within:text-amber-700`}
            >
              Password:
            </label>
            <input type="password" id="password" className={styles.formInput} />
          </div>

          <button className={styles.formButton}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
