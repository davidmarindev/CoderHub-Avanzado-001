import prisma from "../lib/prisma.js";
import { UserSchema } from "../models/user.model.js";

async function getAllUsers() {
  return await prisma.user.findMany();
}

async function getUserById(id) {
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });
  if (!user) {
    throw new Error("User not found");
  }
  return user;
}

async function createUser(userData) {
  const parsed = UserSchema.safeParse(userData);
  if (!parsed.success) {
    throw new Error("Can't create user. Invalid user data");
  }
  const user = await prisma.user.create({
    data: parsed.data,
  });

  return user;
}

async function updateUser(id, userData) {
  const parsed = UserSchema.safeParse(userData);
  if (!parsed.success) {
    throw new Error("Can't update user. Invalid user data");
  }
  const updatedUser = await prisma.user.update({
    where: { id: Number(id) },
    data: parsed.data,
  });

  return updatedUser;
}

async function deleteUser(id) {
  await prisma.user.delete({
    where: { id: Number(id) },
  });
}

async function getPostsByUserId(id) {
  const posts = await prisma.post.findMany({
    where: { userId: Number(id) },
  });

  return posts;
}

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getPostsByUserId,
};
