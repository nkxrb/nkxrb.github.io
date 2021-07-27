export const routeTo = (path: string) => {
  window.location.href = path;
};

export const importFile = (path: string) => {
  return import(`../${path}`)
}