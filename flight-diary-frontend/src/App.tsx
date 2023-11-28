import { useEffect, useState } from "react";
import { DiaryEntry } from "./types";
import DiaryService from "./services/diaries";

const App = () => {
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([]);
  const pageTitle = "Diary entries";

  useEffect(() => {
    DiaryService.getAll().then((data) => setDiaryEntries(data));
  }, []);

  return (
    <div>
      <h1>{pageTitle}</h1>
      {diaryEntries.length > 0 &&
        diaryEntries.map((diaryEntry: DiaryEntry) => {
          console.log(diaryEntry);
          return (
            <div key={diaryEntry.id}>
              <h2>{diaryEntry.date}</h2>
              <div>visibility: {diaryEntry.visibility}</div>
              <div>weather: {diaryEntry.weather}</div>
              <div>
                comment: <i>{diaryEntry.comment}</i>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default App;
