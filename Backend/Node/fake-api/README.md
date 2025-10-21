## Fake API - Backend Node

Este proyecto es una API REST construida con **Node.js** y **Express**. Utiliza **Prisma ORM** para la gestión de la base de datos, **Nodemon** para el desarrollo, **dotenv** para la gestión de variables de entorno y **CORS** para permitir solicitudes desde otros orígenes.

### Tecnologías principales
- Node.js
- Express
- Prisma ORM
- Nodemon
- Dotenv
- CORS

### Requisitos previos
- Node.js y npm instalados

### Instalación
1. Clona el repositorio o navega a la carpeta del proyecto.
2. Instala las dependencias:
	 ```bash
	 npm install
	 ```

### Variables de entorno
Crea un archivo `.env` en la raíz del proyecto y configura las variables necesarias (ejemplo):
```env
DATABASE_URL="file:./prisma/dev.db"
PORT=3000
```

### Migraciones y base de datos
Si es la primera vez que corres el proyecto o has modificado el esquema de la base de datos, ejecuta:
```bash
npx prisma migrate dev
```
Esto aplicará las migraciones y generará el cliente de Prisma.

### Comandos útiles
- **Iniciar el servidor en desarrollo (con nodemon):**
	```bash
	npm run dev
	```
- **Iniciar el servidor en producción:**
	```bash
	npm start
	```
- **Ejecutar migraciones de Prisma:**
	```bash
	npx prisma migrate dev
	```
- **Abrir Prisma Studio (visualizar la base de datos):**
	```bash
	npx prisma studio
	```

### Estructura principal
- `app.js`: Archivo principal de la aplicación Express.
- `controllers/`: Controladores de rutas.
- `db/`: Configuración y datos de la base de datos.
- `routes/`: Definición de rutas de la API.
- `prisma/`: Esquema y migraciones de la base de datos.
- `lib/`: Configuración de Prisma Client.

---
¡Listo! Ahora puedes levantar el proyecto y comenzar a desarrollar tu API.


## Comandos para trabajar con Prisma desde 0

1. **Instalar Prisma CLI y el cliente de Prisma:**
   ```bash
   npm install @prisma/client prisma --save-dev
   ```
2. **Inicializar Prisma en tu proyecto:**
   ```bash
   npx prisma init
   ```
3. **Definir tu esquema de datos:**
   Edita el archivo `prisma/schema.prisma` para definir tus modelos de datos.
4. **Crear y aplicar migraciones:**
   ```bash
   npx prisma migrate dev --name initial -> o sustituye 'initial' por el nombre que prefieras
   ```
5. **Generar el cliente de Prisma:**
   ```bash
   npx prisma generate
   ```
6. **Abrir Prisma Studio para visualizar y gestionar datos:**
   ```bash
   npx prisma studio
   ```
7. **Usar Prisma Client en tu código:**
   Importa y utiliza Prisma Client para interactuar con tu base de datos.
   ```javascript
   import { PrismaClient } from '@prisma/client';

   const prisma = new PrismaClient();

   async function main() {
       const users = await prisma.user.findMany();
       console.log(users);
   }

   main()
       .catch(e => console.error(e))
       .finally(async () => {
           await prisma.$disconnect();
       });