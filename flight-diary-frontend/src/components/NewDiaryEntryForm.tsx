import { CSSProperties, useState } from "react";
import { Visibility, Weather, NewDiaryEntry } from "../types";

interface Props {
  onSubmit: (newDiaryEntry: NewDiaryEntry) => void;
}

const NewDiaryEntryForm = ({ onSubmit }: Props) => {
  const [date, setDate] = useState<string>("");
  const [visibility, setVisibility] = useState<Visibility>(Visibility.Great);
  const [weather, setWeather] = useState<Weather>(Weather.Sunny);
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
    setVisibility(Visibility.Great);
    setWeather(Weather.Sunny);
    setComment("");
  };

  const radioButtonsStyle: CSSProperties = {
    all: "unset",
    display: "flex",
    listStyle: "none",
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          date:{" "}
          <input
            type="date"
            value={date}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setDate(event.target.value)
            }
          ></input>
        </div>
        <div>
          <ul style={radioButtonsStyle}>
            <li>visibility </li>
            {Object.values(Visibility).map((visibilityValue) => {
              return (
                <li key={visibilityValue}>
                  {visibilityValue === visibility ? (
                    <input
                      type="radio"
                      id={visibilityValue}
                      value={visibilityValue}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setVisibility(event.target.value as Visibility)
                      }
                      checked
                    ></input>
                  ) : (
                    <input
                      type="radio"
                      id={visibilityValue}
                      value={visibilityValue}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setVisibility(event.target.value as Visibility)
                      }
                    ></input>
                  )}
                  <label htmlFor={visibilityValue}>{visibilityValue}</label>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul style={radioButtonsStyle}>
            <li>weather </li>
            {Object.values(Weather).map((weatherValue) => {
              return (
                <li key={weatherValue}>
                  {weatherValue === weather ? (
                    <input
                      type="radio"
                      id={weatherValue}
                      value={weatherValue}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setWeather(event.target.value as Weather)
                      }
                      checked
                    ></input>
                  ) : (
                    <input
                      type="radio"
                      id={weatherValue}
                      value={weatherValue}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setWeather(event.target.value as Weather)
                      }
                    ></input>
                  )}
                  <label htmlFor={weatherValue}>{weatherValue}</label>
                </li>
              );
            })}
          </ul>
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
