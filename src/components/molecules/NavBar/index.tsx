import React from "react";
import Heading from "../../atoms/Heading";
import NavLink from "../../atoms/NavLink";
import styles from "./NavBar.module.scss";

type NavBarProps = {
  header: string;
  activeLink: string;
  links: { name: string; url: string }[];
};

const NavBar = ({ header, links, activeLink }: NavBarProps) => {
  return (
    <nav className={styles.navbar}>
      <a href="/">
        <Heading>{header}</Heading>
      </a>
      <ul className={styles.navLinks}>
        {links &&
          links.map((link) => (
            <NavLink
              key={link.name}
              name={link.name}
              url={link.url}
              active={activeLink === link.url}
            />
          ))}
      </ul>
    </nav>
  );
};

export default NavBar;
