import React, { useEffect, useState } from "react";
import styles from "./select.module.css";

export type SelectOption = {
  label: string;
  value: string | number;
};
type SelectProps = {
  title: string;
  options: SelectOption[];
  value: SelectOption;
  onChange: (value: SelectOption) => void;
};

const Select = ({ value, onChange, options, title }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  // make select input required!!!
  const clearOptions = () => {
    onChange({ label: "default", value: "N/A if not applicable" });
  };
  const selectOption = (option: SelectOption) => {
    if (option !== value) onChange(option);
  };

  const isOptionSelected = (option: SelectOption) => {
    return option === value;
  };

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  return (
    <div
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
      className={styles.container}
    >
      <span
        className={value.label == "default" ? styles.default : styles.value}
      >
        {value.value}
      </span>
      {/* <button
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
        className={styles["clear-btn"]}
      >
        {" "}
        &times;
      </button> */}
      {/* <div className={styles.divider}></div> */}
      <div className={isOpen ? styles["caret-close"] : styles["caret-open"]}>
        &#94;
      </div>
      <ul className={isOpen ? styles.show : styles.options}>
        {options.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.label}
            className={`${styles.option} ${
              isOptionSelected(option) ? styles.selected : ""
            } ${index === highlightedIndex ? styles.highlighted : ""}`}
          >
            {option.value}
          </li>
        ))}
      </ul>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default Select;
