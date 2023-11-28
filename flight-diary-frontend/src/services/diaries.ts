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

  try {
    const addedEntry = await axios.post<DiaryEntry[]>(
      `${apiBaseUrl}/diaries`,
      newDiaryEntry
    );
    return addedEntry.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data);
      }
    }
  }
};

export default {
  getAll,
  addNew,
};
