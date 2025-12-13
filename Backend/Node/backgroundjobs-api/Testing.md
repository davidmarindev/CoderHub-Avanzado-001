# 🧪 Testing Básico en Desarrollo Web  
**Node.js · Express · Introducción a React**

---

## 🎯 Objetivo de este documento

Este documento tiene como objetivo introducirte al **testing de software**, explicando:

- Qué es testing y por qué es importante  
- Tipos de testing más comunes  
- Cómo escribir tests básicos en **Node.js + Express**  
- Cómo se testean aplicaciones **React** a alto nivel  

El objetivo **no es cubrir todo**, sino entender los fundamentos y perderle el miedo al testing.

---

## 🤔 ¿Qué es el testing?

El **testing** es el proceso de verificar que nuestro código:

- Funciona correctamente  
- Hace lo que esperamos  
- No se rompe cuando hacemos cambios  

En lugar de probar manualmente cada vez, escribimos **tests automáticos** que validan el comportamiento del código.

---

## ✅ ¿Por qué es importante el testing?

- Detecta errores temprano  
- Permite refactorizar sin miedo  
- Aumenta la calidad del código  
- Es una práctica profesional muy valorada  
- Facilita el trabajo en equipo  

👉 **Un proyecto sin tests es frágil**: cualquier cambio puede romper algo sin darnos cuenta.

---

## 🧠 Tipos de Testing

### 1️⃣ Unit Testing (Tests unitarios)

Prueban **funciones o piezas pequeñas** del código.

- No dependen de bases de datos  
- No hacen requests HTTP  
- Son rápidos  

Ejemplo:

```js
sum(2, 3) === 5
```

📌 Se usan para:
- Lógica de negocio  
- Validaciones  
- Funciones utilitarias  

---

### 2️⃣ Integration Testing (Tests de integración)

Prueban **cómo interactúan varias partes del sistema**.

Ejemplos:
- Un endpoint de Express  
- Un servicio que consulta la base de datos  
- Un flujo simple de la aplicación  

📌 Son más realistas que los unit tests, pero un poco más lentos.

---

### 3️⃣ End-to-End (E2E)

Prueban la aplicación **como un usuario real**.

- Abren el navegador  
- Hacen clicks  
- Envían formularios  

📌 Son más complejos y lentos, pero muy completos.

---

## 🛠️ Testing en Node.js + Express

### Librerías que usaremos

- **Jest** → framework de testing  
- **Supertest** → para probar endpoints HTTP  

Instalación:

```bash
npm install --save-dev jest supertest
```

---

## 📂 Estructura recomendada

```txt
src/
tests/
  sum.test.js
  health.test.js
```

---

## ✏️ Ejemplo 1: Test unitario simple

```js
// tests/sum.test.js
function sum(a, b) {
  return a + b
}

test("suma dos números correctamente", () => {
  expect(sum(2, 3)).toBe(5)
})
```

### Conceptos clave
- `test()` define un test  
- `expect()` compara el resultado  
- `toBe()` valida igualdad exacta  

---

## 🌐 Ejemplo 2: Test de un endpoint con Express

Supongamos el endpoint:

```http
GET /api/health
```

Test:

```js
const request = require("supertest")
const app = require("../app")

describe("GET /api/health", () => {
  it("responde con status 200", async () => {
    const response = await request(app).get("/api/health")
    expect(response.statusCode).toBe(200)
  })
})
```

### ¿Qué está pasando aquí?

- No levantamos el servidor real  
- Supertest simula una petición HTTP  
- Probamos que el endpoint responde correctamente  

---

## ❌ ¿Qué NO deberíamos testear?

No todo necesita tests.

Evita testear:
- Librerías externas  
- Código trivial sin lógica  
- Configuraciones  

Prioriza testear:
- Lógica de negocio  
- Endpoints importantes  
- Validaciones  
- Casos de error  

---

## ⚛️ Testing en React (introducción)

En React **no se testea cómo está hecho el componente**, sino **qué hace**.

### Herramientas más usadas
- Jest  
- React Testing Library  

### ¿Qué se testea?
- Que el componente renderice  
- Que muestre el texto correcto  
- Que responda a eventos (click, submit)  

Ejemplo conceptual:

```jsx
render(<Button />)
expect(screen.getByText("Enviar")).toBeInTheDocument()
```

📌 En React:
- No se testea CSS  
- No se prueban detalles internos  
- Se prueba el comportamiento visible  

---

## 🧠 Testing vs Debugging

| Testing | Debugging |
|------|-----------|
| Preventivo | Reactivo |
| Automático | Manual |
| Se ejecuta siempre | Solo cuando hay errores |

---

## 🎯 Buenas prácticas

- Empieza con pocos tests  
- Mantén los tests simples  
- Los tests deben ser claros y legibles  
- Un test debe fallar por una sola razón  
- Testing es parte del desarrollo, no un extra  

## Comandos Jest

| Método / Función        | ¿Para qué sirve? |
|------------------------|------------------|
| `describe()`           | Agrupa varios tests relacionados (por módulo, endpoint o funcionalidad). |
| `test()` / `it()`      | Define un caso de prueba individual. |
| `expect()`             | Permite realizar una aserción sobre un valor. |
| `toBe()`               | Compara valores primitivos usando igualdad estricta (`===`). |
| `toEqual()`            | Compara objetos o arrays de forma profunda. |
| `toContain()`          | Verifica que un array o string contenga un valor. |
| `toBeTruthy()`         | Verifica que un valor sea verdadero. |
| `toBeFalsy()`          | Verifica que un valor sea falso. |
| `toBeNull()`           | Verifica que el valor sea `null`. |
| `toBeUndefined()`      | Verifica que el valor sea `undefined`. |
| `toThrow()`            | Verifica que una función lance un error. |
| `beforeAll()`          | Se ejecuta una vez antes de todos los tests. |
| `afterAll()`           | Se ejecuta una vez después de todos los tests. |
| `beforeEach()`         | Se ejecuta antes de cada test. |
| `afterEach()`          | Se ejecuta después de cada test. |
| `jest.fn()`            | Crea una función simulada (mock). |
| `toHaveBeenCalled()`   | Verifica que una función mock haya sido llamada. |
| `toHaveBeenCalledWith()` | Verifica que una función mock haya sido llamada con argumentos específicos. |
| `toHaveBeenCalledTimes()` | Verifica cuántas veces fue llamada una función mock. |
| `test.skip()`          | Omite un test durante la ejecución. |
| `test.only()`          | Ejecuta solo ese test (útil para debugging). |

## Ejemplos de uso

### describe() + test()
```js

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

describe("Funciones matemáticas", () => {
  test("suma dos números correctamente", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("resta dos números correctamente", () => {
    expect(subtract(5, 3)).toBe(2);
  });
});
```

### beforeEach() + afterEach()
```js
let counter = 0;
beforeEach(() => {
  counter = 0; // Reinicia el contador antes de cada test
});
afterEach(() => {
  console.log("Test finalizado");
});

test("incrementa el contador", () => {
  counter++;
  expect(counter).toBe(1);
});
```

### jest.fn() + toHaveBeenCalledWith()
```js
const fetchData = jest.fn();
function getData(id) {
  fetchData(id);
}
test("getData llama a fetchData con el ID correcto", () => {
  getData(42);
  expect(fetchData).toHaveBeenCalledWith(42);
});
```

### toEqual()
```js
test("compara objetos correctamente", () => {
  const obj1 = { a: 1, b: 2 };
  const obj2 = { a: 1, b: 2 };
  expect(obj1).toEqual(obj2); // Igualdad profunda
});
```