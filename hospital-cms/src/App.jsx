import React from 'react'; // ✅ THIS LINE FIXES THE WHITE SCREEN
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Page Imports
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import RegisterUser from "./pages/RegisterUser.jsx";
import RegisterDoctor from "./pages/RegisterDoctor.jsx";

// Dashboard Imports
import AdminDashboard from "./pages/AdminDashboard.jsx";
import DoctorDashboard from "./pages/DoctorDashboard.jsx";
import PatientDashboard from "./pages/PatientDashboard.jsx";

// Component Imports
import ProtectedRoute from "./components/ProtectedRoute.jsx";

// Patient Feature Imports
import DoctorSearch from "./pages/patient/DoctorSearch.jsx";
import BookAppointment from "./pages/patient/BookAppointment.jsx";
import AppointmentHistory from "./pages/patient/AppointmentHistory.jsx";
import CurrentAppointment from "./pages/patient/CurrentAppointment.jsx";

// Doctor Feature Imports
import ManageSlots from "./pages/doctor/ManageSlots.jsx";
import DoctorAppointments from "./pages/doctor/DoctorAppointments";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/register-doctor" element={<RegisterDoctor />} />

        {/* PROTECTED ROUTES */}
        
        {/* Dashboards */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/doctor-dashboard"
          element={
            <ProtectedRoute>
              <DoctorDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/patient-dashboard"
          element={
            <ProtectedRoute>
              <PatientDashboard />
            </ProtectedRoute>
          }
        />

        {/* Patient Features */}
        <Route
          path="/find-doctor"
          element={
            <ProtectedRoute>
              <DoctorSearch />
            </ProtectedRoute>
          }
        />

        <Route
          path="/book-appointment"
          element={
            <ProtectedRoute>
              <BookAppointment />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/patient-appointments"
          element={
            <ProtectedRoute>
              <AppointmentHistory />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/current-appointment"
          element={
            <ProtectedRoute>
              <CurrentAppointment />
            </ProtectedRoute>
          }
        />

        {/* Doctor Features */}
        <Route
          path="/doctor/manage-slots"
          element={
            <ProtectedRoute>
              <ManageSlots />
            </ProtectedRoute>
          }
        />
        <Route
  path="/doctor-appointments"
  element={
    <ProtectedRoute>
      <DoctorAppointments />
    </ProtectedRoute>
  }
/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;