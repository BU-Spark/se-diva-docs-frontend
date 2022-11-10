import React from "react";
import { ReactNode } from "react";

type FormWapperProps = {
  title: string;
  children: ReactNode;
};
const FormWrapper = ({ title, children }: FormWapperProps) => {
  return (
    <div>
      <h2 style={{ textAlign: "center", margin: 0, marginBottom: "2rem" }}>
        {title}
      </h2>
      <div
        style={{
          display: "grid",
          gap: "1rem .5rem",
          justifyContent: "flex-start",
          gridTemplateColumns: "auto minmax(auto, 400px)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default FormWrapper;
