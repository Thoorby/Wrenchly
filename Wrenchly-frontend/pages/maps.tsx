export default function MapView() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-yellow-600 mb-4">📍 Nearby Mechanics</h2>
        <p className="mb-4 text-gray-600">Demo map with a mechanic location.</p>
        <div className="w-full h-80 border rounded-lg overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=Johannesburg%20Mechanic&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
}
