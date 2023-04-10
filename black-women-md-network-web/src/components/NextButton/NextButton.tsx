import React, { FormEvent, useState } from "react";
import "./NextButton.css";

type NextButtonProps = {
  type: "submit" | "button" | "reset" | undefined;
  text: string;
};

const NextButton = ({ type, text }: NextButtonProps) => {
  return (
    <div>
      <button className="next-button" type={type}>
        {text}
      </button>
    </div>
  );
};

export default NextButton;
