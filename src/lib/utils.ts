export const getDiagonal = () => {
  const width = window.outerWidth;
  const height = window.outerHeight;
  const diagonal = Math.sqrt(width ** 2 + height ** 2);
  return diagonal;
};
