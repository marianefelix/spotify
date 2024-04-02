export const getTotalPages = (limit: number, total: number) => {
  const totalPages = Math.ceil(total / limit);

  return totalPages;
};
