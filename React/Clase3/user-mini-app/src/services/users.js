const apiUrl = "https://randomuser.me/api?results=12";

async function fetchAllUsers() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data.results;
}

export { fetchAllUsers };
