export const request = async (url, options) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}${url}`, { ...options });
  return res;
};
