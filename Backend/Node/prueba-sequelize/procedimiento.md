# Instalar y configurar Sequelize en Node con express y PostgreSQL

## Paso 1: Crear un proyecto de Node.js
```bash
mkdir prueba-sequelize
cd prueba-sequelize
npm init -y
```

## Paso 2: Instalar las dependencias necesarias
```bash
npm install express sequelize pg pg-hstore
npm install --save-dev sequelize-cli
```
## Paso 3: Configurar Sequelize
```bash
  npx sequelize-cli init
```

## Paso 4: Configurar la conexión a la base de datos
Editar el archivo `config/config.json` para configurar la conexión a PostgreSQL:
```json
{
  "development": {
    "username": "tu_usuario",
    "password": "tu_contraseña",
    "database": "nombre_base_de_datos",
    "host": "localhost"
    "dialect": "postgres"
  }
}
```
## Paso 5: Crear la base de datos
```bash
npx sequelize-cli db:create
```

## Paso 6: Crear un modelo y una migración
```bash
npx sequelize-cli model:generate --name User --attributes name:string, email:string, password:string, phone:string, age:integer
```
## Paso 7: Ejecutar la migración
```bash
npx sequelize-cli db:migrate
```

## Paso 8: Crear un archivo de servidor básico
Crear un archivo `server.js`:

## Paso 9: Traer los modelos en el archivo server.js
```javascript
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const db = require('./models');

const app = express();
app.use(express.json());
const User = db.User;
```

# Comandos útiles de Sequelize CLI

## crear estructura base
npx sequelize init

## generar modelo + migración
npx sequelize model:generate --name User --attributes name:string,email:string

## correr migraciones (up)
npx sequelize db:migrate

## revertir la última migración (down)
npx sequelize db:migrate:undo

## generar seeder
npx sequelize seed:generate --name demo-users

## correr todos los seeders
npx sequelize db:seed:all

## revertir seeders
npx sequelize db:seed:undo:all