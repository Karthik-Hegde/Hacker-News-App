import React, { useEffect, useState } from "react";
import * as E from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/function";

import { getNewStories } from "../../services";
import ListItem from "../../components/molecules/ListItem";
import Button from "../../components/atoms/Button";
import { INCREMENT, TOTAL_NEWS_ITEMS } from "../../constants";
import NavBar from "../../components/molecules/NavBar";
import styles from "../../components/templates/styles.module.scss";

const Home = () => {
  const [newsIds, setNewsIds] = useState<number[]>([]);
  const [limit, setLimit] = useState(INCREMENT);
  const [pathname] = useState(
    window.location.pathname === "/" ? "/newstories" : window.location.pathname
  );

  useEffect(() => {
    getNewStories(pathname)
      .then((e) =>
        pipe(
          e,
          E.getOrElse(() => {
            return [] as number[];
          })
        )
      )
      .then(setNewsIds);
  }, [pathname]);

  const handleButtonClick = () => {
    if (limit + INCREMENT >= TOTAL_NEWS_ITEMS) {
      setLimit(TOTAL_NEWS_ITEMS);
    } else {
      setLimit((prevLimit) => prevLimit + INCREMENT);
    }
  };

  return (
    <div className={styles.container}>
      <NavBar
        header="Hacker News"
        activeLink={pathname}
        links={[
          { name: "Top Stories", url: "/topstories" },
          { name: "Best Stories", url: "/beststories" },
        ]}
      />
      {newsIds.length > 0 && (
        <main className={styles.main}>
          <ul className={styles.newsList}>
            {newsIds.slice(0, limit).map((newsId) => {
              return <ListItem key={newsId} newsId={newsId} />;
            })}
          </ul>
          <Button onClick={handleButtonClick}>Load More</Button>
        </main>
      )}
    </div>
  );
};

export default Home;
