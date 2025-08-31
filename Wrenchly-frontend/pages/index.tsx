export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to Wrenchly 🔧
      </h1>
      <p className="text-lg text-gray-700 max-w-xl mb-6">
        Your all-in-one platform to find trusted mechanics, get instant 
        assistance, and book services with ease.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
        <a
          href="/assistant"
          className="bg-white shadow-md p-6 rounded-lg hover:bg-blue-50"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-2">AI Assistant 🤖</h2>
          <p>Chat with our AI assistant to get quick vehicle support.</p>
        </a>

        <a
          href="/mechanics"
          className="bg-white shadow-md p-6 rounded-lg hover:bg-blue-50"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Find Mechanics 🔍</h2>
          <p>Discover trusted nearby mechanics and workshops.</p>
        </a>

        <a
          href="/book"
          className="bg-white shadow-md p-6 rounded-lg hover:bg-blue-50"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Book Service 📅</h2>
          <p>Schedule repairs or maintenance directly in the app.</p>
        </a>

        <a
          href="/profile"
          className="bg-white shadow-md p-6 rounded-lg hover:bg-blue-50"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-2">My Profile 👤</h2>
          <p>Manage your account, vehicles, and service history.</p>
        </a>
      </div>

      <footer className="mt-10 text-sm text-gray-500">
        🚀 Wrenchly – Making car care simple & reliable
      </footer>
    </main>
  );
}