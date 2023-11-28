interface CourseParts {
  name: string;
  exerciseCount: number;
}

const Content = ({ courseParts }: { courseParts: CourseParts[] }) => {
  return (
    <>
      {courseParts.map((course: CourseParts) => (
        <p key={course.name}>
          {course.name} {course.exerciseCount}
        </p>
      ))}
    </>
  );
};

export default Content;
