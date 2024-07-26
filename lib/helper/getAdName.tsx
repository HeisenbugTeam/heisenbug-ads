export const getAdName = (name: string) => {
  const adName = name.split('_').join(' ');
  return adName;
};
