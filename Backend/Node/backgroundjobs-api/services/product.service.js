const db = require("../models");
const { Product } = db;

async function upsertFromApiItem(item) {
  // item de fakestore: {id,title,price,description,category,image}
  try {
    // Verificar si ya existe el producto con ese externalId
    const existing = await Product.findOne({ where: { externalId: item.id } });
    if (existing) {
      // Si ya existe, puedes retornar el producto existente y un flag
      return [existing, false];
    }
    // Si no existe, crear el producto
    const result = await Product.upsert(
      {
        externalId: item.id,
        title: item.title,
        price: item.price,
        description: item.description,
        category: item.category,
        image: item.image,
      },
      { returning: true }
    );
    return result;
  } catch (error) {
    // Manejar cualquier error y evitar que explote el worker
    console.error("Error en upsertFromApiItem:", error);
    return [null, false];
  }
}

async function list({ page = 1, size = 20 } = {}) {
  const offset = (page - 1) * size;
  const { rows, count } = await Product.findAndCountAll({
    limit: size,
    offset,
    order: [["createdAt", "DESC"]],
  });
  return { items: rows, total: count, page, size };
}

module.exports = {
  upsertFromApiItem,
  list,
};
