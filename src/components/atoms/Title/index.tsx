import React from "react";

import styles from "./Title.module.scss";

type TitleProps = {
  url: string;
  title: string;
};

const Title = ({ url, title }: TitleProps) => {
  return (
    <a className={styles.title} href={url} target="_blank" rel="noreferrer">
      {title}
    </a>
  );
};

export default Title;
