export function deleteExpand(obj: Record<number, boolean>, index: number) {
  delete obj[index];

  Object.keys(obj)
    .map(Number)
    .filter((key) => key > index)
    .forEach((key) => {
      obj[key - 1] = obj[key];
      delete obj[key];
    });

  return obj;
}
