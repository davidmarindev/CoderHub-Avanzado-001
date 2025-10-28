import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET;

const generateToken = (payload, expiresIn = "1h") => {
  return jwt.sign(payload, secretKey, { expiresIn });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return null;
  }
};

export { generateToken, verifyToken };
