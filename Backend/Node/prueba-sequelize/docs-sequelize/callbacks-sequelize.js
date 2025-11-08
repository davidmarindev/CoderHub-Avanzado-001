// Creacion

// beforeValidate
// afterValidate

// Antes/después de validar datos

// beforeCreate
// afterCreate

// Antes/después de crear un registro

// Actualización

// beforeUpdate
// afterUpdate

// Antes/después de actualizar un registro

// Guardado (creación o actualización)

// beforeSave
// afterSave

// Destrucción

// beforeDestroy
// afterDestroy

// Antes/después de borrar un registro

// Consulta

// beforeFind
// afterFind

// Antes/después de realizar una consulta

// Upsert / Save general

// beforeUpsert
// afterUpsert

// Antes/después de un upsert (create o update según exista)

// Ejemplos de uso:

import bcrypt from "bcrypt";

User.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
});

User.beforeUpdate(async (user) => {
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }
});

// Auditoría simple:

Product.afterCreate(async (product) => {
  console.log(`Nuevo producto creado: ${product.title}`);
});

// Cancelar una operación lanzando un error:

User.beforeDestroy((user, options) => {
  if (user.role === "ADMIN")
    throw new Error("No puedes eliminar administradores");
});
