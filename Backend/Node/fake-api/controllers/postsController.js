import { th } from "zod/v4/locales";
import prisma from "../lib/prisma.js";

const index = async (req, res) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
};

const show = async (req, res) => {
  const { id } = req.params;
  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
  });
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }
  res.json(post);
};

const create = async (req, res) => {
  const postData = req.body.post;
  const userId = parseInt(postData.userId, 10);

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error("User with ID " + userId + " not found");
    }

    const newPost = await prisma.post.create({
      data: postData,
    });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const update = async (req, res) => {
  console.log("Updating post - to be implemented");
};

const deletePost = async (req, res) => {
  console.log("Deleting post - to be implemented");
};

export default {
  index,
  show,
  create,
  update,
  deletePost,
};
