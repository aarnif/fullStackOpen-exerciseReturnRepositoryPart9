import axios from "axios";
import { DiaryEntry } from "../types";
import { apiBaseUrl } from "../constants";
import { NewDiaryEntry } from "../types";

const getAll = async () => {
  const { data } = await axios.get<DiaryEntry[]>(`${apiBaseUrl}/diaries`);
  return data;
};

const addNew = async (object: NewDiaryEntry) => {
  const newDiaryEntry = {
    date: object.date,
    weather: object.weather,
    visibility: object.visibility,
    comment: object.comment,
  };
  const addedEntry = await axios.post<DiaryEntry[]>(
    `${apiBaseUrl}/diaries`,
    newDiaryEntry
  );
  return addedEntry.data;
};

export default {
  getAll,
  addNew,
};
