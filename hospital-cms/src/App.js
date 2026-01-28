import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RegisterUser from "./pages/RegisterUser";
import RegisterDoctor from "./pages/RegisterDoctor";
import AdminDashboard from "./pages/AdminDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDashboard from "./pages/PatientDashboard";
console.log(RegisterDoctor);


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<Home />} />

        {/* AUTH PAGES */}
        <Route path="/login" element={<Login />} />
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/register-doctor" element={<RegisterDoctor />} />

        {/* DASHBOARDS */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
