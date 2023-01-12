const remove = (arr: any[], value: any) => {
  return arr.filter(function(ele) {
    return ele != value;
  });
};

export default remove;
