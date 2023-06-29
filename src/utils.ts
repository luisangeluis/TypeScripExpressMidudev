import type { NewDiaryEntry } from "./types";
import { Visibility, Weather } from "./Enums";

// const parseComment = (commentFromUser: any): string => {
//   if (!isString(commentFromUser)) {
//     throw new Error("Incorrect or missing commment");
//   }

//   return commentFromUser;
// };

const parseDate = (dateFromUser: any): string => {
  if (!isDate(dateFromUser)) {
    throw new Error("Incorrect or missing date");
  }
  return dateFromUser;
};

const parseWeather = (weather: any): Weather => {
  if (!isString(weather) || !isWeather(weather))
    throw new Error("Incorrect or missing weather");

  return weather;
};

const parseVisibility = (visibility: any): Visibility => {
  if (!isString(visibility) || !isVisibility(visibility))
    throw new Error("Incorrect or missing visibility");

  return visibility;
};

const isString = (string: any): boolean =>
  typeof string === "string" || string instanceof String;

const isDate = (date: string): boolean => Boolean(Date.parse(date));

const isWeather = (weather: any): boolean =>
  Object.values(Weather).includes(weather);

const isVisibility = (visibility: any): boolean =>
  Object.values(Visibility).includes(visibility);

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newDiaryEntry: NewDiaryEntry = {
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  };

  return newDiaryEntry;
};

export default toNewDiaryEntry;
