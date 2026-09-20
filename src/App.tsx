import Home from "@pages/home/home.tsx";
import Register from "@pages/auth/Register.tsx";
import SignIn from "@pages/auth/SingIn";
import Cliente from "@pages/Dashboards/DashCliente";
import Admin from "@pages/Dashboards/DashAdmin";
import Empleado from "@pages/Dashboards/DashEmpleado";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/singin" element={<SignIn />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/Dashboards/Dashcliente" element={<Cliente />} />
        <Route path="/Dashboards/DashAdmin" element={<Admin />} />
        <Route path="/Dashboards/DashEmpleado" element={<Empleado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
