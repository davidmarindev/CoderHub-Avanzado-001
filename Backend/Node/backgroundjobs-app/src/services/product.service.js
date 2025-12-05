const db = require("../models");
const { Product } = db;

async function upsertFromApiItem(item) {
  // item de fakestore: {id,title,price,description,category,image}
  return Product.upsert(
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
