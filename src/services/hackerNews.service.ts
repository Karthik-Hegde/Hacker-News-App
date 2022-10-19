import axios from "axios";
import { pipe } from "fp-ts/function";
import * as TE from "fp-ts/lib/TaskEither";
import { NewsItem } from "../types";

const baseUrl = "https://hacker-news.firebaseio.com/v0";
const storyUrl = `${baseUrl}/item/`;

export const getNewStories = async (pathname: string) => {
  return await pipe(
    TE.tryCatch(
      () => axios.get<number[]>(`${baseUrl}${pathname}.json`),
      (reason) => new Error(`${reason}`)
    ),
    TE.map((resp) => resp.data)
  )();
};

export const getStory = async (storyId: number) => {
  return await pipe(
    TE.tryCatch(
      () => axios.get<NewsItem>(`${storyUrl}${storyId}.json`),
      (reason) => new Error(`${reason}`)
    ),
    TE.map((resp) => resp.data)
  )();
};
