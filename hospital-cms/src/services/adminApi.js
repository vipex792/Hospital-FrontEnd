export const registerDoctor = async (doctorData) => {
  console.log("Sending doctor data:", doctorData);

  // Fake success response (frontend-only)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 800);
  });
};
