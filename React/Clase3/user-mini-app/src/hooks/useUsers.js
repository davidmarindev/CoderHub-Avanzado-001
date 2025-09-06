import { useEffect, useState } from "react";
import { fetchAllUsers } from "../services/users";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadUsers() {
      setLoading(true);
      try {
        const users = await fetchAllUsers();
        setUsers(users);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, []);

  return { users, loading, error };
}
