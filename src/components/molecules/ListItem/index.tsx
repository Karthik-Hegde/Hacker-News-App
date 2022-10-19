import React, { memo, useEffect, useState } from "react";
import { pipe } from "fp-ts/lib/function";
import * as E from "fp-ts/lib/Either";
import { formatDistanceToNow } from "date-fns";

import { getStory } from "../../../services/hackerNews.service";
import { NewsItem } from "../../../types";
import Title from "../../atoms/Title";
import Subtitle from "../../atoms/Subtitle";
import styles from "./ListItem.module.scss";

type ListItemProps = {
  newsId: number;
};

const ListItem = ({ newsId }: ListItemProps) => {
  const [newsData, setNewsData] = useState<NewsItem>({} as NewsItem);

  useEffect(() => {
    getStory(newsId)
      .then((e) =>
        pipe(
          e,
          E.getOrElse(() => ({} as NewsItem))
        )
      )
      .then(setNewsData);
  }, [newsId]);

  if (Object.keys(newsData).length === 0) {
    return null;
  }

  return (
    <li className={styles.newsItem}>
      <Title title={newsData.title} url={newsData.url} />
      <Subtitle
        score={newsData.score}
        by={newsData.by}
        time={formatDistanceToNow(new Date(newsData.time * 1000), {
          addSuffix: true,
        })}
      />
    </li>
  );
};

export default memo(ListItem);
