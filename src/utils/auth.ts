import jwt from "jsonwebtoken";

export function verifyToken(token: string | undefined) {
  if (!token) return null;

  try {
    return jwt.verify(token, process.env.JWT_SECRET as string);
  } catch (error) {
    console.error("Error verifying token:", error);
    return null;
  }
}
