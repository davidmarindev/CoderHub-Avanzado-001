// Crear
await User.create({ name: "Ana", email: "ana@x.com" });

// Leer (básico)
const users = await User.findAll({ where: { active: true } });

// Leer con filtros
const u = await User.findOne({ where: { email: "ana@x.com" } });

// Include (join)
const products = await Product.findAll({
  include: [{ model: User, as: "owner", attributes: ["id", "name"] }],
});

// Paginación
const page = 1,
  size = 10;
const { rows, count } = await Product.findAndCountAll({
  limit: size,
  offset: (page - 1) * size,
  order: [["createdAt", "DESC"]],
});

// Actualizar
await User.update({ name: "Ana María" }, { where: { id: 1 } });

// Borrar
await Product.destroy({ where: { id: 5 } });

// Transacción
await sequelize.transaction(async (t) => {
  const user = await User.create(
    { name: "Luis", email: "l@x.com" },
    { transaction: t }
  );
  await Product.create(
    { title: "Teclado", price: 39.99, userId: user.id },
    { transaction: t }
  );
});

// Scope / atributos
await Product.findAll({ attributes: ["id", "title", "price"] });

// Raw query (cuando necesitas SQL puro)
const [rows] = await sequelize.query('SELECT COUNT(*) FROM "Products"');
