import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LoginContext } from "./contexts/LoginContext";
import { useMemo, useState } from "react";

import App from "./App";
import SigninPage from "./pages/SigininPage";
import SignupPage from "./pages/SignupPage";
import SelectionPage from "./pages/SelectionPage";
import SplashPage from "./pages/SplashPage";
import ResultPage from "./pages/ResultPage";

import { PageContext } from "./contexts/PageContext";
import usePage from "./hooks/usePage";

function LoginWrapper() {
  const accessTokenFromLocalStorage = localStorage.getItem("access_token");
  const [accessToken, setAccessToken] = useState(accessTokenFromLocalStorage);
  const loginValue = useMemo(
    () => ({ accessToken, setAccessToken }),
    [accessToken, setAccessToken]
  );

  return (
    <LoginContext.Provider value={loginValue}>
      <Router />
    </LoginContext.Provider>
  );
}

function Router() {
  const pageValue = usePage();

  return (
    <PageContext.Provider value={pageValue}>
      <Routes>
        <Route path="/" element={<SplashPage />}></Route>
        <Route path="/signin" element={<SigninPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/select" element={<SelectionPage />}></Route>
        <Route path="/result" element={<ResultPage />}></Route>
        <Route path="/main" element={<App />}></Route>
      </Routes>
    </PageContext.Provider>
  );
}

export default LoginWrapper;
