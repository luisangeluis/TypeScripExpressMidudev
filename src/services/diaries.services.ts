import { DiaryEntry, DiaryEntryWithoutDate } from "../types";
import diariesData from "./diaries.json";


const diaries: Array<DiaryEntry> = diariesData as Array<DiaryEntry>;

export const getEntries = () => diaries;
export const getEntriesWithoutDate = (): DiaryEntryWithoutDate[] => diaries;

export const addEntry = () => null;