export const findPublicId = (url) => {
  return url.split("/")[url.split("/").length - 1].split(".")[0];
};
