export const getPageNumber = (url: string | null) => {
  const urlParts = url!.split("=");
  const pageNumber = parseInt(urlParts[1], 10);
  return isNaN(pageNumber) ? null : pageNumber;
};
