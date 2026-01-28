/*************************************************
 * SIMULATED DATABASE (IN-MEMORY)
 *************************************************/

// Doctor-blocked slots (Doctor controls these)
let blockedSlotsDB = {
  "2024-04-15": ["09:00 AM"],
  "2024-04-16": ["11:30 AM"],
};

// Already booked slots (Patient bookings)
let bookedSlotsDB = {
  "2024-04-15": ["10:30 AM", "11:00 AM"],
  "2024-04-16": ["09:30 AM"],
};

// Master slot list (hospital timing)
const ALL_SLOTS = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
];

/*************************************************
 * PATIENT SIDE APIs
 *************************************************/

// Get doctors by specialization
export const getDoctorsBySpecialization = async (specialization) => {
  return [
    { id: 1, name: "Dr. Amit Sharma", specialization },
    { id: 2, name: "Dr. Neha Verma", specialization },
  ];
};

// Get available slots for patient booking
// Combines BOOKED + DOCTOR BLOCKED slots
export const getDoctorSlots = async (doctorId, date) => {
  const booked = bookedSlotsDB[date] || [];
  const blocked = blockedSlotsDB[date] || [];

  return ALL_SLOTS.map((time) => ({
    time,
    available: !booked.includes(time) && !blocked.includes(time),
  }));
};

// Book appointment (patient)
export const bookAppointment = async ({ doctorId, date, time }) => {
  if (!bookedSlotsDB[date]) {
    bookedSlotsDB[date] = [];
  }

  // Prevent double booking
  if (bookedSlotsDB[date].includes(time)) {
    return { success: false, message: "Slot already booked" };
  }

  bookedSlotsDB[date].push(time);

  console.log("BOOKED:", { doctorId, date, time });

  return { success: true };
};

// Patient appointment history
export const getPatientAppointments = async (patientId) => {
  return [
    {
      id: 1,
      doctor: "Dr. Amit Sharma",
      specialization: "Cardiology",
      date: "2024-04-10",
      time: "10:00 AM",
      status: "Upcoming",
    },
    {
      id: 2,
      doctor: "Dr. Neha Verma",
      specialization: "Neurology",
      date: "2024-03-25",
      time: "11:30 AM",
      status: "Completed",
    },
  ];
};

// Current appointment (only upcoming)
export const getCurrentAppointment = async (patientId) => {
  return {
    doctor: "Dr. Amit Sharma",
    specialization: "Cardiology",
    date: "2024-04-15",
    time: "10:30 AM",
    status: "Upcoming",
  };
};

/*************************************************
 * DOCTOR SIDE APIs
 *************************************************/

// Doctor views own slots with blocked status
export const getDoctorSlotsForDoctor = async (date) => {
  const blocked = blockedSlotsDB[date] || [];

  return ALL_SLOTS.map((time) => ({
    time,
    blocked: blocked.includes(time),
  }));
};

// Doctor blocks / unblocks slot
export const toggleBlockSlot = async (date, time) => {
  if (!blockedSlotsDB[date]) {
    blockedSlotsDB[date] = [];
  }

  if (blockedSlotsDB[date].includes(time)) {
    // Unblock
    blockedSlotsDB[date] = blockedSlotsDB[date].filter(
      (t) => t !== time
    );
  } else {
    // Block
    blockedSlotsDB[date].push(time);
  }

  console.log("BLOCKED SLOTS DB:", blockedSlotsDB);

  return { success: true };
};
