import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import SigninPage from "./pages/SigininPage";
import SignupPage from "./pages/SignupPage";
import SelectionPage from "./pages/SelectionPage";
import SplashPage from "./pages/SplashPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SplashPage />}></Route>
      <Route path="/signin" element={<SigninPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/select" element={<SelectionPage />}></Route>
      <Route path="/main" element={<App />}></Route>
    </Routes>
  </BrowserRouter>
);
