import React, { useState } from "react";
import Navbar from "../Navigation Bar/Navbar";

const styles = {
  container: "w-full h-[90vh] flex justify-center items-center",
  form: "w-2/4 flex justify-center flex-col items-center shadow-md shadow-gray-300 rounded-2xl p-7",
  formGroup: "w-full mb-5 relative group",
  formLabel: "text-[#626262] font-medium transition-colors duration-300",
  formInput:
    "w-full text-sm block border-[#626262] border-b mt-3 focus:outline-none focus:ring-0",
  formButton:
    "w-full border-1 rounded-2xl py-2 mt-7 bg-amber-600 text-white hover:bg-amber-700 cursor-pointer transition-all",
};

function Login() {
  const [loginedUser, setLoginedUser] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (loginedUser.username && loginedUser.password) {
      localStorage.setItem("loginedUser", JSON.stringify(loginedUser));
    } else {
      alert("Please enter both username and password.");
    }

    setLoginedUser({
      username: "",
      password: "",
    });
  }

  function handleChange(e) {
    setLoginedUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1 className="text-2xl font-bold mb-7">Login Form</h1>

          <div className={styles.formGroup}>
            <label
              htmlFor="username"
              className={`${styles.formLabel} group-focus-within:text-amber-700`}
            >
              Username:
            </label>
            <input
              name="username"
              value={loginedUser.username}
              type="text"
              id="username"
              className={styles.formInput}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label
              htmlFor="password"
              className={`${styles.formLabel} group-focus-within:text-amber-700`}
            >
              Password:
            </label>
            <input
              name="password"
              value={loginedUser.password}
              type="password"
              id="password"
              className={styles.formInput}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className={styles.formButton}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
