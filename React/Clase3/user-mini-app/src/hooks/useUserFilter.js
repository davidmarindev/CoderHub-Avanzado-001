import { useState, useEffect } from "react";

export function useUserFilter(users, query, gender, nat) {
  const [filtered, setFiltered] = useState(users);

  function debounceQuery() {
    if (query == "") {
      setFiltered(users);
    }

    if (gender) {
      console.log("Entro Filtro", gender);
      const filteredUsers = users.filter((user) => user.gender === gender);
      setFiltered(filteredUsers);
    }

    if (nat) {
      setTimeout(() => {
        const filteredUsers = users.filter((user) => user.nat === nat);
        setFiltered(filteredUsers);
      }, 300);
    }

    if (query.length >= 3) {
      console.log("Entro");
      setTimeout(() => {
        console.log("Entro Filtro", query);
        console.log("users", users);
        const filteredUsers = users.filter(
          (user) =>
            user.name.first.toLowerCase().includes(query.toLowerCase()) ||
            user.name.last.toLowerCase().includes(query.toLowerCase())
        );
        setFiltered(filteredUsers);
      }, 300);
    }
  }

  useEffect(debounceQuery, [query, gender, nat, users]);

  return { filtered, setFiltered };
}
