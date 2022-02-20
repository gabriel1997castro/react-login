import { Route, Routes, useNavigate } from "react-router-dom";
import { Box, Button, Title } from "./components";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { ResetPassword } from "./pages/ResetPassword";
import { Upgrade } from "./pages/Upgrade";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="upgrade" element={<Upgrade />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

