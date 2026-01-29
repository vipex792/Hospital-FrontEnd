
// src/services/userApi.js

const API_BASE_URL = "http://localhost:5000/api"; 
// ⬆️ change later when backend is ready

/**
 * Register a new patient (frontend-only for now)
 */
export const registerUser = async (userData) => {
  console.log("API → Register User:", userData);

  // FRONTEND-ONLY SIMULATION
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Patient registered successfully",
      });
    }, 800);
  });
};

/**
 * Login user (admin / doctor / patient)
 */
export const loginUser = async (loginData) => {
  console.log("API → Login User:", loginData);

  // FRONTEND-ONLY SIMULATION
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        role: "patient", // change dynamically later
        token: "dummy-jwt-token",
      });
    }, 800);
  });
};
