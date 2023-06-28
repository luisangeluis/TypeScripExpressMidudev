export type Weather = "sunny" | "rainny" | "clody" | "windy" | "stormy";
export type Visibility = "great" | "good" | "ok" | "poor";

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
}

// export type DiaryEntryWithoutDate = Pick<DiaryEntry, "id" | "weather" | "visibility">
export type DiaryEntryWithoutDate = Omit<DiaryEntry, "date">;
export type NewDiaryEntry = Omit<DiaryEntry, "id">;
