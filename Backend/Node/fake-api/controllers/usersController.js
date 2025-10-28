import usersService from "../services/users.service.js";
import { present } from "../serializers/base.serializer.js";
import { serializeUser } from "../serializers/user.serializer.js";
import { serializePost } from "../serializers/post.serializer.js";

const index = async (req, res) => {
  const users = await usersService.getAllUsers();
  res.json(present(users, serializeUser));
};

const show = async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getUserById(id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(present(user, serializeUser));
};

const create = async (req, res) => {
  try {
    console.log("Creating user with data:", req.body);
    const user = await usersService.createUser(req.body);
    res.status(201).json(present(user, serializeUser));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, lastname, email, username } = req.body;

  const updatedUser = await usersService.updateUser(id, {
    name,
    lastname,
    email,
    username,
  });
  if (!updatedUser) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(present(updatedUser, serializeUser));
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await usersService.deleteUser(id);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postByUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await usersService.getUserById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const posts = await usersService.getPostsByUserId(id);
    res.json({
      user: present(user, serializeUser),
      posts: present(posts, serializePost),
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default {
  index,
  show,
  create,
  update,
  deleteUser,
  postByUser,
};
