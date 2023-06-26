import { DiaryEntry, DiaryEntryWithoutDate } from '../types'
import diariesData from './diaries.json'

const diaries: DiaryEntry[] = diariesData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): DiaryEntryWithoutDate | undefined => {
  const entry = diaries.find((d) => d.id === id)

  if (entry != null) {
    const { date, ...restOfEntry } = entry
    return restOfEntry
  }

  return undefined
}

export const getEntriesWithoutDate = (): DiaryEntryWithoutDate[] => {
  const result = diaries.map((diary) => {
    return {
      id: diary.id,
      weather: diary.weather,
      visibility: diary.visibility
    }
  })

  return result
}

export const addEntry = () => null
