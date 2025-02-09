export const formatDate = (isoData) => {
  const date = new Date(isoData);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
