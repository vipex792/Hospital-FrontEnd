export const getDoctorAppointments = async (doctorId) => {
  // Dummy data (backend-ready)
  return [
    {
      id: 1,
      patient: "Rahul Patil",
      date: "2024-04-15",
      time: "10:30 AM",
      status: "Upcoming",
    },
    {
      id: 2,
      patient: "Sneha Kulkarni",
      date: "2024-04-14",
      time: "11:00 AM",
      status: "Completed",
    },
  ];
};
