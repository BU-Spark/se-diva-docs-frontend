import React, { useEffect, useState } from "react";
import styles from "./textbox.module.css";

type TextBoxProps = {
  title: string;
  value: string;
  placeholder: string;
  required?: boolean;
  onChange: (value: string) => void;
};

const TextBox = ({
  title,
  value,
  placeholder,
  required,
  onChange,
}: TextBoxProps) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.textbox}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      />
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default TextBox;
