import Home from "@pages/home/home.tsx";
import SignIn from "@pages/auth/singin.tsx";
import Register from "@pages/auth/register.tsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/singin" element={<SignIn />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
