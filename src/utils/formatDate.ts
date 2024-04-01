export const formatDate = (date: string) => {
  const newDate = new Date(date);
  const formattedDate = newDate.toLocaleDateString('pt-BR');

  return formattedDate;
};
