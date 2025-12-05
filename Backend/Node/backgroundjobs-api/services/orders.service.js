const db = require("../models");
const { Order, OrderItem } = db;
const { cacheGet, cacheSet } = require("../utils/cache.js");

// No aplicare paginacion por ahora.
async function list() {
  const cacheKey = "orders:list";
  const cachedOrders = await cacheGet(cacheKey);
  if (cachedOrders) {
    console.log("Returning cached orders");
    return cachedOrders;
  }

  const orders = await Order.findAll({
    order: [["createdAt", "DESC"]],
  });

  await Promise.all(
    orders.map(async (order) => {
      console.log("Fetching items for order:", order.id);
      order.dataValues.items = await OrderItem.findAll({
        where: { orderId: order.id },
      });
      console.log(
        "Items",
        order.dataValues.items.length,
        "Order ID:",
        order.id
      );
    })
  );

  await cacheSet(cacheKey, orders, 300); // Cache for 5 minutes
  return orders;
}

async function itemsByOrderId(orderId) {
  const items = await OrderItem.findAll({
    where: { orderId },
  });
  return items;
}

module.exports = {
  list,
  itemsByOrderId,
};
