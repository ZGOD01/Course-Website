import { Routes, Route } from "react-router-dom";
import AdminLogin from "../components/AdminLoginCard";
import Dashboard from "../components/Dashboard";
import ModulePage from "../components/ModulePage"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/modules" element={<ModulePage />} /> 
    </Routes>
  );
}

export default App;
