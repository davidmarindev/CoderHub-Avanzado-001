import prisma from "../lib/prisma.js";

const index = async (req, res) => {
  const users = await prisma.user.findMany();

  res.json(users);
};

const show = async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, lastname, email } = req.body;

  const updatedUser = await prisma.user.update({
    where: { id: Number(id) },
    data: { name, lastname, email },
  });

  res.json(updatedUser);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  await prisma.user.delete({
    where: { id: Number(id) },
  });

  res.status(204).end();
};

export default {
  index,
  show,
  update,
  deleteUser,
};
