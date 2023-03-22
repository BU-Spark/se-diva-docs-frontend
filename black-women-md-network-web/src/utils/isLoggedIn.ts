export const isLoggedIn = (): boolean => {
  const token = localStorage.getItem("token");
  if (!token) {
    return false;
  }

  // const decodedToken: { exp: number } = jwtDecode(token);

  // if (decodedToken.exp * 1000 < Date.now()) {
  //   localStorage.removeItem('token');
  //   return false;
  // }

  // return true;
  return true;
};
