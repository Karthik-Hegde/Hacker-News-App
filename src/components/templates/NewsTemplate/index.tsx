import React from "react";

import styles from "./NewsTemplate.module.scss";

type NewsTemplateProps = {
  header: React.ReactNode;
  body: React.ReactNode;
};

const NewsTemplate = ({ header, body }: NewsTemplateProps) => {
  return (
    <div className={styles.container}>
      {header}
      <main className={styles.main}>{body}</main>
    </div>
  );
};

export default NewsTemplate;
