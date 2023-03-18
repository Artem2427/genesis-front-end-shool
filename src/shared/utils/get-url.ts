export const getUrl = (
  url: string,
  replaceItems: { key: string; value: string }[]
) => {
  let result = url;
  replaceItems.forEach(({ key, value }) => {
    result = result.replace(key, value);
  });

  return result;
};
