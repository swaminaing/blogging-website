import React from "react";
import Navbar from "./components/Navigation Bar/Navbar";
import "./App.css";
import Aside from "./components/Aside/Aside";
import MainContent from "./components/Main/MainContent";
import { Outlet, useLocation } from "react-router";

function App() {
  const currentLocation = useLocation();
  console.log(currentLocation);
  return (
    <main>
      <Navbar />
      <section>
        <div className="grid grid-cols-4">
          <div className="col-span-1 sm:hidden bg-white border-r p-4 hidden lg:block">
            <Aside />
          </div>

          <div className="col-span-3 w-full">
            {currentLocation.pathname === "/newpost" ? (
              <Outlet />
            ) : (
              <MainContent />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
