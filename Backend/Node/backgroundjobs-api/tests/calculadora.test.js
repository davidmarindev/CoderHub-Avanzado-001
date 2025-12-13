// tests/sum.test.js
// Test unitario simple para una función utilitaria

function sum(a, b) {
  return a + b;
}

function sustract(a, b) {
  return a - b;
}

describe("Funciones matemáticas básicas", () => {
  test("suma dos números correctamente", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("sustrae dos números correctamente", () => {
    expect(sustract(5, 3)).toBe(2);
  });
});

// Explicación:
// Este test verifica que la función sum(a, b) retorna la suma correcta de dos números.
// Es un ejemplo de test unitario: prueba una función aislada, sin dependencias externas.
