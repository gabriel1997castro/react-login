import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { ResetPassword } from "./pages/ResetPassword";
import { Upgrade } from "./pages/Upgrade";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="upgrade" element={<Upgrade />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

