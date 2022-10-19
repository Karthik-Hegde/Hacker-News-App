import React, { useEffect, useState } from "react";
import * as E from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/function";

import { getNewStories } from "../../services";
import { INCREMENT, TOTAL_NEWS_ITEMS } from "../../constants";
import ListItem from "../../components/molecules/ListItem";
import Button from "../../components/atoms/Button";
import NavBar from "../../components/molecules/NavBar";
import NewsTemplate from "../../components/templates/NewsTemplate";

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
    <NewsTemplate
      header={
        <NavBar
          header="Hacker News"
          activeLink={pathname}
          links={[
            { name: "Top Stories", url: "/topstories" },
            { name: "Best Stories", url: "/beststories" },
          ]}
        />
      }
      body={
        newsIds.length > 0 ? (
          <>
            <ul>
              {newsIds.slice(0, limit).map((newsId) => {
                return <ListItem key={newsId} newsId={newsId} />;
              })}
            </ul>
            <Button onClick={handleButtonClick}>Load More</Button>
          </>
        ) : null
      }
    />
  );
};

export default Home;
