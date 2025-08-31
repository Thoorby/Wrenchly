import { useState } from "react";

export default function Book() {
  const [booked, setBooked] = useState(false);

  return (
    <main className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">📅 Book a Mechanic</h1>

      {!booked ? (
        <div className="bg-white p-6 rounded shadow">
          <p>Select date & time for your appointment:</p>
          <input type="datetime-local" className="mt-2 border p-2 rounded w-full" />
          <button
            onClick={() => setBooked(true)}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
          >
            Confirm Booking
          </button>
        </div>
      ) : (
        <div className="bg-green-100 p-6 rounded shadow text-green-800">
          ✅ Booking confirmed! Your mechanic will contact you soon.
        </div>
      )}
    </main>
  );
}
