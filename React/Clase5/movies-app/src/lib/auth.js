export async function login(email, password) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!email || !password)
    throw new Error("Email y contraseña son obligatorios");

  let users = JSON.parse(localStorage.getItem("usuarios_movies")) || [];

  if (users.length === 0) throw new Error("No hay usuarios registrados");

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) throw new Error("Usuario o contraseña incorrectos");
  console.log("Usuario autenticado:", user);
  return {
    user: user,
    token: "token-falso-" + Math.random().toString(36).substring(2),
  };
}

export async function logout() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return true;
}
