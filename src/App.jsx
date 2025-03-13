import React from "react";
import Navbar from "./components/Navigation Bar/Navbar";
import "./App.css";
import Aside from "./components/Aside/Aside";
import MainContent from "./components/Main/MainContent";

function App() {
  return (
    <main>
      <Navbar />
      <section>
        <div className="grid grid-cols-4">
          <div
            className="col-span-1 bg-white
           border-r p-4"
          >
            <Aside />
          </div>
          <div className="col-span-3">
            <MainContent />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
