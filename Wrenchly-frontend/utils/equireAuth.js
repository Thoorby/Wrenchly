// utils/requireAuth.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAccessToken } from "./auth";

export default function requireAuth(Component) {
  return function ProtectedPage(props) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const token = getAccessToken();
      if (!token) {
        router.replace("/login"); // redirect to login if not authenticated
      } else {
        setLoading(false);
      }
    }, [router]);

    if (loading) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      );
    }

    return <Component {...props} />;
  };
}
