import prisma from "../lib/prisma.js";
import { serializePost } from "../serializers/post.serializer.js";
import { present } from "../serializers/base.serializer.js";

const index = async (req, res) => {
  const posts = await prisma.post.findMany();
  res.json(present(posts, serializePost));
};

const show = async (req, res) => {
  const { id } = req.params;
  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
  });
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }
  res.json(present(post, serializePost));
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
    res.status(201).json(present(newPost, serializePost));
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
