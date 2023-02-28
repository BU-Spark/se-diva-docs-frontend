import React, { FormEvent, useState } from "react";
import "./BackButton.css";

type BackButtonProps = {
  type: "submit" | "button" | "reset" | undefined;
  text: string;
  onClick: () => void;
};

const BackButton = ({ type, text, onClick }: BackButtonProps) => {
  return (
    <div>
      <button className="back-button" type={type} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default BackButton;
