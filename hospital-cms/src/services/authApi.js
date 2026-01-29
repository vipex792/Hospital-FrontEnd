import api from "./api";
console.log("authApi loaded");


export const login = (data) =>
  api.post("/Auth/login", data);

export const registerPatient = (data) =>
  api.post("/Auth/register-patient", data);

export const registerDoctor = (data) =>
  api.post("/Auth/register-doctor", data);
