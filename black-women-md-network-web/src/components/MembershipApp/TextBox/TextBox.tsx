import React, { useEffect, useState } from "react";
import { Placeholder } from "react-bootstrap";
import styles from "./textbox.module.css";

type TextBoxProps = {
  title: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

const TextBox = ({ title, value, placeholder, onChange }: TextBoxProps) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.textbox}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        required
      />
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default TextBox;
