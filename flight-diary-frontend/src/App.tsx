import { useEffect, useState } from "react";
import { DiaryEntry, NewDiaryEntry } from "./types";
import DiaryService from "./services/diaries";
import NewDiaryEntryForm from "./components/NewDiaryEntryForm";

const App = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([]);
  const pageTitle = "Diary entries";

  useEffect(() => {
    DiaryService.getAll().then((data) => setDiaryEntries(data));
  }, []);

  const onSubmit = (newDiaryEntry: NewDiaryEntry) => {
    const addedDiaryEntry = DiaryService.addNew(newDiaryEntry);
    addedDiaryEntry
      .then((data) => setDiaryEntries(diaryEntries.concat(data || [])))
      .catch((error) => {
        setErrorMessage(error.message);
        setTimeout(() => {
          setErrorMessage("");
        }, 2000);
      });
  };

  return (
    <div>
      <h1>Add new entry</h1>
      {errorMessage && (
        <div style={{ color: "red", marginBottom: 10 }}>{errorMessage}</div>
      )}
      <NewDiaryEntryForm onSubmit={onSubmit} />
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
