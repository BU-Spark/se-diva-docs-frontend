import React from "react";
import { ReactNode } from "react";

type FormWapperProps = {
  title: string;
  children: ReactNode;
};
const FormWrapper = ({ title, children }: FormWapperProps) => {
  return (
    <div>
      <p style={{ fontSize: "20px" }}>{title}</p>
      <div
        style={{
          display: "grid",
          gap: "1rem .5rem",
          gridTemplateColumns: "auto ",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default FormWrapper;
