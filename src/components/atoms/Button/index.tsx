import React from "react";

import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
};

const Button = ({ children, onClick, disabled = false }: ButtonProps) => {
  return (
    <button className={styles.btn} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
