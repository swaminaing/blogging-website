import React, { useState } from "react";
import SearchBar from "../Search/SearchBar";
import { NavLink } from "react-router";

// static tailwind css is left outside to prevent re-creation on every re-render
const styles = {
  nav: "bg-transparent flex justify-evenly align-center border-b p-5",
  logo: "text-xl font-bold cursor-pointer",
  button:
    "bg-[] hover:bg-amber-600 hover:border-amber-600 transition-all duration-200 ease-linear border-1 rounded-full px-5 py-1 mx-2 cursor-pointer",
};

function Navbar() {
  const [isLoggedin, setIsLoggedin] = useState(
    !!localStorage.getItem("loginedUser")
  );

  function handleLogoutButton() {
    localStorage.removeItem("loginedUser");
    setIsLoggedin(false);
    window.location.reload();
  }

  return (
    <nav className={styles.nav}>
      <div>
        <NavLink to="/">
          <h2 className={styles.logo}>BlogSite</h2>
        </NavLink>
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        {isLoggedin == false ? (
          <NavLink to="/login">
            <button className={styles.button}>Login</button>
          </NavLink>
        ) : (
          <button className={styles.button} onClick={handleLogoutButton}>
            Logout
          </button>
        )}
        <button className={styles.button}>Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
