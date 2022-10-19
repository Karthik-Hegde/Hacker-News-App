export type NewsItem = {
  by: string;
  descendants: number;
  id: number;
  score: number;
  time: number;
  title: string;
  type: "job" | "story" | "comment" | "poll" | "pollopt";
  url: string;
};
