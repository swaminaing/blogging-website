import React, { useState } from "react";

// static tailwind css is left outside to prevent re-creation on every re-render
const styles = {
  nav: "bg-transparent flex justify-evenly align-center border-b p-5",
  logo: "text-xl font-bold cursor-pointer",
  button:
    "bg-[] hover:bg-amber-600 hover:border-amber-600 transition-all duration-200 ease-linear border-1 rounded-full px-5 py-1 mx-2 cursor-pointer",
};

function Navbar() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <nav className={styles.nav}>
      <div>
        <h2 className={styles.logo}>BlogSite</h2>
      </div>
      <div>
        <button className={styles.button}>
          {isLogin === true ? "Login" : "Logout"}
        </button>

        <button className={styles.button}>Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
