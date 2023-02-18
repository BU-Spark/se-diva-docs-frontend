const remove = (array: any[], value: any) => {
  const index = array.indexOf(value);
  array.splice(index, 1); // 2nd parameter means remove one item only
};

export default remove;
