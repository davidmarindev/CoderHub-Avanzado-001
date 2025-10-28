import prisma from "../../lib/prisma.js";

const adminIndex = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    const posts = await prisma.post.findMany();
    const postCount = posts.length;
    const userCount = users.length;

    res.render("admin/index", {
      userCount,
      postCount,
      users,
      posts,
    });
  } catch (error) {
    res.status(500).send("Error loading admin dashboard");
  }
};

export default {
  adminIndex,
};
