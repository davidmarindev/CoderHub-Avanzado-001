const { connection } = require("../jobs/queues.js");

// Busca un valor en caché por su clave
// Si no existe, devuelve null
// Si existe, parsea el JSON y lo devuelve
async function cacheGet(key) {
  return new Promise((resolve, reject) => {
    connection.get(key, (err, reply) => {
      if (err) return reject(err);
      resolve(reply ? JSON.parse(reply) : null);
    });
  });
}

// Guarda un valor en caché con una clave y un tiempo de expiración (en segundos)
// Luego de ese tiempo, el valor se elimina automáticamente
// Lo guarda como JSON stringificado
async function cacheSet(key, value, expirationInSeconds = 300) {
  return new Promise((resolve, reject) => {
    connection.setex(key, expirationInSeconds, JSON.stringify(value), (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
}

module.exports = {
  cacheGet,
  cacheSet,
};

// Redis explicacion almacenamiento clave-valor en memoria, rapido acceso datos

/* 
{
 products: [ {id:1, title: 'Product 1', price: 100}, {id:2, title: 'Product 2', price: 150} ],
 orders: [ {id:1, userId: 5, total: 250}, {id:2, userId: 8, total: 400} ],
 users: [ {id:5, name: 'John Doe', email: 'john@example.com'}, {id:8, name: 'Jane Smith', email: 'jane@example.com'} ]
 queues: { emailQueue: [...], productSyncQueue: [...] }
}
  
*/
