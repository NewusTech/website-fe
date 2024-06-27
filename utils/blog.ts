export const formattedDate = (publishAt: string | Date) => {
  return new Date(publishAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};