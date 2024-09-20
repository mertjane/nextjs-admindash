import { useState, useEffect } from "react";
import { Session } from "next-auth";


const useSession = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await fetch("/api/session");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        if (data.session) {
          setSession(data.session);
        } else {
          console.warn("No session data received");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setError("Failed to fetch session data");
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, []);

  return { session, loading, error };
};

export default useSession;
