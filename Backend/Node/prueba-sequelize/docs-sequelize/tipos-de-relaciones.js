// 1. belongsTo

// Significa: “Este modelo pertenece a otro”.
// Se usa para el lado hijo de la relación (el que tiene la foreign key).

Product.belongsTo(User, { foreignKey: "userId", as: "owner" });

// Crea una columna userId en Product y permite:

const product = await Product.findByPk(1, { include: ["owner"] });

// 2. hasOne

// Significa: “Este modelo tiene un (solo) otro modelo relacionado”.
// Es la contraparte de belongsTo (1:1 relación directa).

User.hasOne(Profile, { foreignKey: "userId", as: "profile" });
Profile.belongsTo(User, { foreignKey: "userId", as: "user" });

// Cada User tendrá un único Profile.

// 3. hasMany

// Significa: “Este modelo tiene muchos registros del otro modelo”.
// Se usa para el lado padre de una relación 1:N.

User.hasMany(Product, { foreignKey: "userId", as: "products" });
Product.belongsTo(User, { foreignKey: "userId", as: "owner" });

// permite:

const user = await User.findByPk(1, { include: ["products"] });

// 4. belongsToMany

// Significa: “Este modelo se relaciona con muchos del otro modelo (y viceversa)”.
// Crea una tabla intermedia (join table) automáticamente (o puedes definirla).

Product.belongsToMany(Category, {
  through: "ProductCategories",
  as: "categories",
  foreignKey: "productId",
});
Category.belongsToMany(Product, {
  through: "ProductCategories",
  as: "products",
  foreignKey: "categoryId",
});

// Esto genera:

await product.addCategory(category);
await category.addProduct(product);

// y te permite incluir:

await Product.findAll({ include: ["categories"] });
await Category.findAll({ include: ["products"] });

// 5. Polymorphic Associations (simuladas)

// Sequelize no soporta asociaciones polimórficas de forma nativa,
// pero puedes simularlas usando campos adicionales.

Comment.belongsTo(User, { foreignKey: "commentableId", constraints: false });
Comment.belongsTo(Product, { foreignKey: "commentableId", constraints: false });

// esto permite:

User.hasMany(Comment, { foreignKey: "commentableId", constraints: false });
Product.hasMany(Comment, { foreignKey: "commentableId", constraints: false });
