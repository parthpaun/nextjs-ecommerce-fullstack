export const request = async (url, options) => {
  console.log("`${process.env.HOST}${url}`", process.env.NEXT_PUBLIC_HOST);
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}${url}`, { ...options });
  return res;
};
