import React from "react";
import { useNavigate } from "react-router-dom";

export const signOut = (): void => {
  localStorage.removeItem("token");
  let navigate = useNavigate();
  navigate("/welcome");
};
