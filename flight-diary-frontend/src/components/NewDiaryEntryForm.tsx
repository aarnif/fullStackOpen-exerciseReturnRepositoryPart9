import { useState } from "react";

const NewDiaryEntryForm = ({ onSubmit }) => {
  const [date, setDate] = useState<string>("");
  const [visibility, setVisibility] = useState<string>("");
  const [weather, setWeather] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const newDiaryEntry = {
      date: date,
      weather: weather,
      visibility: visibility,
      comment: comment,
    };
    onSubmit(newDiaryEntry);
    setDate("");
    setVisibility("");
    setWeather("");
    setComment("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          date:{" "}
          <input
            value={date}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setDate(event.target.value)
            }
          ></input>
        </div>
        <div>
          visibility:{" "}
          <input
            value={visibility}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setVisibility(event.target.value)
            }
          ></input>
        </div>
        <div>
          weather:{" "}
          <input
            value={weather}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setWeather(event.target.value)
            }
          ></input>
        </div>
        <div>
          comment:{" "}
          <input
            value={comment}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setComment(event.target.value)
            }
          ></input>
        </div>
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default NewDiaryEntryForm;
