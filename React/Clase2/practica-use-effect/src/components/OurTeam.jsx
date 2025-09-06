import { useState, useEffect } from "react";

function OurTeam() {
  const [people, setPeople] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const apiUrl = "https://randomuser.me/api?results=6";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const members = data.results.map((person) => ({
          uuid: person.login.uuid,
          name: `${person.name.first} ${person.name.last}`,
          role: "Team Member",
          imageUrl: person.picture.thumbnail,
        }));
        console.log("Personas:", members);

        setPeople(members);
        setFiltered(members);
      } catch (error) {
        console.log("Error fetching data:", error);
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const debouncedQuery = () => {
    const handler = setTimeout(() => {
      if (query === "") {
        setFiltered(people);

        return;
      }

      if (query.length < 3) return;

      const filteredPeople = people.filter((person) =>
        person.name.toLowerCase().includes(query.toLowerCase())
      );
      setFiltered(filteredPeople);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  };

  useEffect(debouncedQuery, [query, people]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-white sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg/8 text-gray-400">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
          <div>
            <input
              type="text"
              className="border border-gray-300 text-center rounded-md p-2 mt-4 w-full"
              placeholder="Search team members..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {filtered.map((person) => (
            <li key={person.uuid}>
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="size-16 rounded-full outline-1 -outline-offset-1 outline-white/10"
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-white">
                    {person.name}
                  </h3>
                  <p className="text-sm/6 font-semibold text-indigo-400">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OurTeam;
