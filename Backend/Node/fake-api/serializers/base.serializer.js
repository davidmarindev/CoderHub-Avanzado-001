export function iso(date) {
  return date instanceof Date ? date.toISOString() : date;
}

export function pick(obj, fields = []) {
  const out = {};
  for (const f of fields) if (obj?.[f] !== undefined) out[f] = obj[f];
  return out;
}

export function present(collectionOrItem, serializer) {
  if (Array.isArray(collectionOrItem)) {
    return collectionOrItem.map((i) => serializer(i));
  }
  return serializer(collectionOrItem);
}
