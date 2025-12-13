## Ejemplos de casos a testear en este proyecto

### 1. Unitarios (tests de lógica de negocio)
- Crear un producto con datos válidos (product.service.js)
- No permitir crear un producto sin título o precio
- Calcular el precio total de una orden (orders.service.js)
- Validar que la función de envío de email se llama correctamente (mock de email.service.js)

### 2. Integración (tests de endpoints)
- GET /api/products devuelve lista de productos
- POST /api/products crea un producto y responde con status 201
- GET /api/products/:id devuelve el producto correcto o 404 si no existe
- DELETE /api/products/:id elimina un producto existente

### 3. Casos de error y validaciones
- Crear producto con datos inválidos responde con error 400
- Intentar eliminar un producto inexistente responde con 404

### 4. Integración con servicios externos
- Al crear un producto, se dispara el envío de email (mockeando sendMail)

### 5. Otros
- Testear que los modelos tienen las asociaciones correctas (belongsTo, belongsToMany)
- Testear que los workers de jobs procesan correctamente los trabajos (mock de Bull)

Puedes crear archivos como:
- `tests/product.service.test.js`
- `tests/products.routes.test.js`
- `tests/email.service.test.js`
- `tests/order.service.test.js`