import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import BlogContextProvider from "./context/blog-contex.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <BlogContextProvider>
        <Routes>
          <Route index element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BlogContextProvider>
    </BrowserRouter>
  </StrictMode>
);
