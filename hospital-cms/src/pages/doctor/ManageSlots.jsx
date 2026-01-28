import React, { useEffect, useState } from "react";
import { getDoctorSlotsForDoctor, toggleBlockSlot } from "../../services/patientApi";
import MyNavbar from "../../components/MyNavbar"; // ✅ Added Navbar for consistency

function ManageSlots() {
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState([]);

  const isSunday = (d) => new Date(d).getDay() === 0;

  const loadSlots = async (selectedDate) => {
    const data = await getDoctorSlotsForDoctor(selectedDate);
    setSlots(data);
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;

    if (isSunday(selectedDate)) {
      alert("Sunday is not allowed");
      return;
    }

    setDate(selectedDate);
    loadSlots(selectedDate);
  };

  const handleToggle = async (time) => {
    await toggleBlockSlot(date, time);
    loadSlots(date);
  };

  return (
    <>
      {/* ✅ Navbar Added Here */}
      <MyNavbar /> 

      <div className="container mt-4">
        <h3>Manage Slot Availability</h3>

        <input
          type="date"
          className="form-control mb-3"
          onChange={handleDateChange}
        />

        <div>
          {slots.length === 0 && date && (
            <div className="alert alert-info">No slots available (or API not connected)</div>
          )}

          {slots.map((slot, i) => (
            <button
              key={i}
              onClick={() => handleToggle(slot.time)}
              className={`btn me-2 mb-2 ${
                slot.blocked
                  ? "btn-danger" // Red for blocked
                  : "btn-outline-success" // Green outline for available
              }`}
            >
              {slot.time} <br/>
              <small style={{fontSize: '0.7em'}}>{slot.blocked ? "BLOCKED" : "OPEN"}</small>
            </button>
          ))}
        </div>

        <p className="mt-3 text-muted">
          Click a Green slot to <strong>Block</strong> it (Red). <br/>
          Click a Red slot to <strong>Unblock</strong> it (Green).
        </p>
      </div>
    </>
  );
}

export default ManageSlots;