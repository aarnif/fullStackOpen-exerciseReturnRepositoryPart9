import { CoursePart } from "../types";

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Part = ({ coursePart }: { coursePart: CoursePart }) => {
  let component = null;

  switch (coursePart.kind) {
    case "basic":
      console.log(
        coursePart.name,
        coursePart.description,
        coursePart.exerciseCount
      );
      component = (
        <div>
          <i>{coursePart.description}</i>
        </div>
      );
      break;
    case "group":
      console.log(
        coursePart.name,
        coursePart.exerciseCount,
        coursePart.groupProjectCount
      );
      component = <div>project exercises {coursePart.groupProjectCount}</div>;
      break;
    case "background":
      console.log(
        coursePart.name,
        coursePart.description,
        coursePart.exerciseCount,
        coursePart.backgroundMaterial
      );
      component = (
        <>
          <div>
            <i>{coursePart.description}</i>
          </div>
          <div>
            <i>{coursePart.backgroundMaterial}</i>
          </div>
        </>
      );
      break;
    case "special":
      console.log(
        coursePart.name,
        coursePart.description,
        coursePart.exerciseCount,
        coursePart.requirements
      );
      component = (
        <>
          <div>
            <i>{coursePart.description}</i>
          </div>
          <div>required skills: {coursePart.requirements.join(", ")}</div>
        </>
      );
      break;
    default:
      return assertNever(coursePart);
  }

  return (
    <>
      <div style={{ marginBottom: 10 }}>
        <strong>
          {coursePart.name} {coursePart.exerciseCount}
        </strong>
        {component}
      </div>
    </>
  );
};

export default Part;
