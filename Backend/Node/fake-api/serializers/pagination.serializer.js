export function serializePage({ items, total, page, size }, itemSerializer) {
  return {
    data: items.map(itemSerializer),
    meta: { total, page, size, pages: Math.ceil(total / size) },
  };
}
