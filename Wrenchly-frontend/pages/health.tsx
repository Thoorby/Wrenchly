import { useEffect, useState } from "react";

export default function HealthPage() {
  const [health, setHealth] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:3000/health")
      .then((res) => res.json())
      .then((data) => setHealth(data))
      .catch((err) => setHealth({ status: "error", message: err.message }));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>🔧 Wrenchly Health Check</h1>
      {health ? (
        <pre>{JSON.stringify(health, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
