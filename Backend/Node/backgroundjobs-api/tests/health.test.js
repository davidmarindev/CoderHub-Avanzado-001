// tests/health.test.js
// Test de integración para un endpoint de Express

const request = require("supertest");
const app = require("../index"); // Asegúrate que tu app Express se exporta en index.js

describe("GET /api/health", () => {
  it("responde con status 200", async () => {
    const response = await request(app).get("/api/health");
    expect(response.statusCode).toBe(200);
  });
});

// Explicación:
// Este test usa Supertest para simular una petición HTTP al endpoint /api/health.
// No es necesario levantar el servidor real, solo importar la app de Express.
// Es un ejemplo de test de integración: prueba cómo responde el endpoint.
