// JSX
// Componentes
// Props
// Estado
// Contexto
// Hooks

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;

const operacion = (a, b, callback) => {
  return callback(a, b);
};

console.log(operacion(4, 2, suma));
console.log(operacion(4, 2, resta));
console.log(operacion(4, 2, multiplicacion));
console.log(operacion(4, 2, division));
