import * as React from "react";
import styled from "styled-components";
import styles from "./select.module.css";

export type SelectOption = {
  label: string;
  value: any;
};
type SelectProps = {
  options: SelectOption[];
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

const Select = ({ value, onChange, options }: SelectProps) => {
  return (
    <div tabIndex={0} className={styles.container}>
      <span className={styles.value}>Value</span>
      <button className={styles["clear-btn"]}> &times;</button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={styles.options}>
        {options.map((option) => (
          <li key={option.label} className={styles.option}>
            {option.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
