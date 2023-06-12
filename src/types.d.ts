export type Weather = "sunny" | "rainny" | "clody" | "windy" | "stormy";
export type Visibility = "great" | "good" | "ok" | "poor";

export interface DiaryEntry {
  id: string,
  date: string,
  weather: Weather,
  visibility:Visibility
}