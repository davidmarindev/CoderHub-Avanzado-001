"use strict";
const { Model } = require("sequelize");
const { sendMail } = require("../services/email.service.js");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "category",
      });
      Product.belongsToMany(models.Order, {
        through: "OrderItems",
        foreignKey: "productId",
        as: "orders",
      });
    }
  }
  Product.init(
    {
      title: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      externalId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );

  // Product.afterCreate(async (product, options) => {
  //   const to = "williamp0403@gmail.com";
  //   const subject = "Nuevo producto creado";
  //   const text = `Se ha creado un nuevo producto: ${product.title}`;
  //   const html = `<h1>Nuevo producto creado</h1><br><p>Se ha creado un nuevo producto: ${product.title}</p>`;
  //   await sendMail({ to, subject, text, html });
  // });
  return Product;
};
