import { iso, pick } from "./base.serializer.js";
const availableFields = [
  "id",
  "title",
  "content",
  "imageUrl",
  "userId",
  "published",
];

export function serializePost(post) {
  if (!post) return null;
  return {
    ...pick(post, availableFields),
    createdAt: iso(post.createdAt),
    updatedAt: iso(post.updatedAt),
  };
}
