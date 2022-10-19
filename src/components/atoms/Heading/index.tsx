import React from "react";

import styles from "./Heading.module.scss";

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return <h1 className={styles.heading}>{children}</h1>;
};

export default Header;
