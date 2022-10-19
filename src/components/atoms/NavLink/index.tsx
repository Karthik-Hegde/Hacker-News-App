import React from "react";

import styles from "./NavLink.module.scss";

type NavLinkProps = {
  name: string;
  url: string;
  active: boolean;
};

const NavLink = ({ name, url, active }: NavLinkProps) => {
  return (
    <li className={`${styles.link} ${active && styles.active}`}>
      <a href={`${url}`}>{name}</a>
    </li>
  );
};

export default NavLink;
