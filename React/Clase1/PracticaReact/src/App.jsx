import { useState, useEffect } from "react";
import StudentCard from "./components/StudentCard";
import "./App.css";

function App() {
  const [estudiantes, setEstudiantes] = useState([
    { id: 1, name: "Juan" },
    { id: 2, name: "Maria" },
    { id: 3, name: "Pedro" },
  ]);

  console.log("Hola Mundo");

  useEffect(() => {
    console.log("Componente montado");
    alert("Lista actualizada");
  }, [estudiantes]);

  const handleClick = (e) => {
    e.preventDefault();
    const newEstudiante = {
      id: estudiantes.length + 1,
      name: e.target.elements[0].value,
    };
    setEstudiantes([...estudiantes, newEstudiante]);
    e.target.reset();
  };

  return (
    <div>
      <h1>Lista de Estudiantes</h1>
      {estudiantes.map((estudiante) => (
        <StudentCard key={estudiante.id} nombreEstudiante={estudiante.name} />
      ))}

      <form action="" onSubmit={handleClick}>
        <input type="text" placeholder="Nombre del estudiante" />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default App;
