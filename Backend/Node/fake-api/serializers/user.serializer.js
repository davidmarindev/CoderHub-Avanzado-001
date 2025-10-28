import { iso, pick } from "./base.serializer.js";
const availableFields = [
  "id",
  "email",
  "password",
  "name",
  "lastName",
  "username",
];

export function serializeUser(user) {
  if (!user) return null;
  return {
    ...pick(user, availableFields),
    createdAt: iso(user.createdAt),
    updatedAt: iso(user.updatedAt),
  };
}
