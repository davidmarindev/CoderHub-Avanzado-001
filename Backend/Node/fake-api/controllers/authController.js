import prisma from "../lib/prisma.js";
import { generateToken } from "../lib/jwt.js";

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log("Login attempt with data:", req.body);
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = generateToken({
    userId: user.id,
    email: user.email,
    username: user.username,
  });
  res.json({ token });
};

export default { login };
