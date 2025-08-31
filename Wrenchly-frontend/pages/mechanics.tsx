export default function Mechanics() {
  const mechanics = [
    { name: "Joe's Auto Repair", distance: "2 km away" },
    { name: "Speedy Mechanics", distance: "5 km away" },
    { name: "City Garage", distance: "7 km away" },
  ];

  return (
    <main className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">📍 Nearby Mechanics</h1>

      <ul className="space-y-4">
        {mechanics.map((m, i) => (
          <li key={i} className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold">{m.name}</h2>
            <p className="text-gray-600">{m.distance}</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded">Book Now</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
