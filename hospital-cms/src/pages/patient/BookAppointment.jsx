import React, { useEffect, useState } from 'react'; // ✅ Correct Import
import { useLocation, useNavigate } from "react-router-dom";
import { getDoctorSlots, bookAppointment } from "../../services/patientApi";
import MyNavbar from "../../components/MyNavbar"; // ✅ Added Navbar

function BookAppointment() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const doctor = state?.doctor;

  const [date, setDate] = useState("");
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");

  useEffect(() => {
    if (date && doctor) {
      getDoctorSlots(doctor.id, date).then(setSlots);
      setSelectedSlot(""); // reset slot on date change
    }
  }, [date, doctor]);

  if (!doctor) return (
    <>
      <MyNavbar />
      <div className="container mt-5"><h4>No doctor selected. Please go back and search again.</h4></div>
    </>
  );

  const isSunday = (d) => new Date(d).getDay() === 0;

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;

    if (isSunday(selectedDate)) {
      alert("Appointments are not available on Sundays");
      return;
    }

    setDate(selectedDate);
  };

  const handleBook = async () => {
    if (!selectedSlot) {
      alert("Please select a time slot");
      return;
    }

    await bookAppointment({
      doctorId: doctor.id,
      date,
      time: selectedSlot,
    });

    alert("Appointment booked successfully!");
    navigate("/patient-dashboard");
  };

  return (
    <>
      <MyNavbar />
      <div className="container mt-4">
        <h3>Book Appointment</h3>

        <p><strong>Doctor:</strong> {doctor.name}</p>

        <input
          type="date"
          className="form-control mb-3"
          onChange={handleDateChange}
        />

        <div className="mb-3">
          {slots.length === 0 && date && (
            <p>No available slots</p>
          )}

          {slots.map((slot, i) => (
            <button
              key={i}
              disabled={!slot.available}
              onClick={() => setSelectedSlot(slot.time)}
              className={`btn me-2 mb-2 ${
                slot.available
                  ? selectedSlot === slot.time
                    ? "btn-success"
                    : "btn-outline-primary"
                  : "btn-secondary"
              }`}
            >
              {slot.time}
            </button>
          ))}
        </div>

        <button
          className="btn btn-primary"
          onClick={handleBook}
          disabled={!date || !selectedSlot}
        >
          Confirm Booking
        </button>
      </div>
    </>
  );
}

export default BookAppointment;