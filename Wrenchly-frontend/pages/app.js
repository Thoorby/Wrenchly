// pages/_app.js
import { useEffect } from "react";
import { initAuth } from "../utils/auth";
import "../styles/globals.css";
import { AuthProvider } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initAuth();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
