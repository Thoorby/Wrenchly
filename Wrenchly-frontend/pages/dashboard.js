// pages/dashboard.js
import ProtectedRoute from "../components/ProtectedRoute";
import { useAuth } from "../contexts/AuthContext";

export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <ProtectedRoute>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 w-96 text-center">
          <h1 className="text-2xl font-bold mb-4">Welcome to Wrenchly 🚗🔧</h1>

          {user ? (
            <>
              <p className="mb-2">
                Hello, <span className="font-semibold">{user.username}</span>
              </p>
              <p className="mb-6 text-gray-600">{user.email}</p>
            </>
          ) : (
            <p className="text-gray-500">Loading profile...</p>
          )}

          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </ProtectedRoute>
  );
}
