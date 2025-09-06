import { useUsers } from "../hooks/useUsers";

function UsersTable() {
  const { users, loading, error } = useUsers();

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center">Tabla de Usuarios</h1>
      {loading && <p>Cargando usuarios...</p>}
      {error && <p>Error al cargar usuarios: {error.message}</p>}
      <div class="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table class="min-w-full text-sm">
          <thead class="bg-slate-100 text-left text-slate-700">
            <tr>
              <th class="p-3 font-semibold">Avatar</th>
              <th class="p-3 font-semibold">Nombre</th>
              <th class="p-3 font-semibold">Email</th>
              <th class="p-3 font-semibold">País</th>
              <th class="p-3 font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            {users.map((user) => (
              <tr class="hover:bg-slate-50" key={user.login?.uuid}>
                <td class="p-3">
                  <img
                    src={user.picture.thumbnail}
                    alt={`Avatar de ${user.name.first} ${user.name.last}`}
                    class="w-10 h-10 rounded-full object-cover ring-2 ring-slate-200"
                  />
                </td>
                <td class="p-3 text-slate-800">
                  {user.name.first} {user.name.last}
                </td>
                <td class="p-3">
                  <a
                    href="mailto:john.carter@example.com"
                    class="text-indigo-600 hover:underline"
                  >
                    {user.email}
                  </a>
                </td>
                <td class="p-3 text-slate-700">{user.location.country}</td>
                <td class="p-3">
                  <button class="px-3 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
                    Ver detalle
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UsersTable;
