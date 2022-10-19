import React from "react";

import styles from "./Subtitle.module.scss";

type SubtitleProps = {
  score: number;
  by: string;
  time: string;
};

const Subtitle = ({ score, by, time }: SubtitleProps) => {
  return (
    <h5 className={styles.subtitle}>{`${score} points by ${by} | ${time}`}</h5>
  );
};

export default Subtitle;
