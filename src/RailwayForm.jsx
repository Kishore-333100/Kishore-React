import React, { useState } from "react";
import "./Form.css";

export default function RailwayForm() {
  const [formData, setFormData] = useState({
    passengerName: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    fromStation: "",
    toStation: "",
    trainClass: "",
    travelDate: "",
    numTickets: 1,
    seatPreference: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
🚆 Ticket Booking Successful!

👤 Name: ${formData.passengerName}
🎂 Age: ${formData.age}
🚻 Gender: ${formData.gender}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
🏁 From: ${formData.fromStation}
🎯 To: ${formData.toStation}
🚉 Class: ${formData.trainClass}
🗓️ Date: ${formData.travelDate}
🎟️ Tickets: ${formData.numTickets}
💺 Seat Preference: ${formData.seatPreference}
    `);
  };

  return (
    <div className="railway-form-container">
      <h2>🚆 Railway Ticket Booking Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Passenger Info */}
        <label>
          Passenger Name:
          <input
            type="text"
            name="passengerName"
            value={formData.passengerName}
            onChange={handleChange}
            required
          />
        </label>

        <div className="form-row">
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Gender:
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </label>
        </div>

        {/* Contact Info */}
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            pattern="[0-9]{10}"
            placeholder="10-digit number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        {/* Travel Info */}
        <div className="form-row">
          <label>
            From Station:
            <input
              type="text"
              name="fromStation"
              value={formData.fromStation}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            To Station:
            <input
              type="text"
              name="toStation"
              value={formData.toStation}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <label>
          Class:
          <select name="trainClass" value={formData.trainClass} onChange={handleChange} required>
            <option value="">Select Class</option>
            <option>Sleeper (SL)</option>
            <option>AC 3-Tier (3A)</option>
            <option>AC 2-Tier (2A)</option>
            <option>First Class (1A)</option>
            <option>Second Sitting (2S)</option>
          </select>
        </label>

        <label>
          Travel Date:
          <input
            type="date"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Number of Tickets:
          <input
            type="number"
            name="numTickets"
            min="1"
            max="6"
            value={formData.numTickets}
            onChange={handleChange}
          />
        </label>

        <label>
          Seat Preference:
          <select
            name="seatPreference"
            value={formData.seatPreference}
            onChange={handleChange}
          >
            <option value="">No Preference</option>
            <option>Window</option>
            <option>Middle</option>
            <option>Aisle</option>
          </select>
        </label>

        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
}
