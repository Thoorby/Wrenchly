import { useState } from "react";

export default function Profile() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">🛠️ Mechanic Registration</h2>

        {submitted ? (
          <p className="text-green-600 font-semibold">✅ Profile submitted! Awaiting admin approval.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input type="text" placeholder="Mechanic Name" required className="border p-2 rounded" />
            <input type="text" placeholder="Service Offered" export default function Profile() {
  return (
    <main className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">👤 My Profile</h1>

      <div className="bg-white p-6 rounded shadow max-w-md">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john@example.com</p>
        <p><strong>Car:</strong> Toyota Corolla</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
          Edit Profile
        </button>
      </div>
    </main>
  );
}
 className="border p-2 rounded" />
            <input type="text" placeholder="Location" required className="border p-2 rounded" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">Submit</button>
          </form>
        )}
      </div>
    </main>
  );
}
