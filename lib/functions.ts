export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substr(0, maxLength) + "...";
};
